const nudge = 15;
let highlightedRelationshipGroupIds = new Set();

function getRelationshipGroupId(relationship) {
    return `${relationship.type}:${relationship.p1}`;
}

function getRelationshipGroupIdsToHighlight(member) {
    const groupIds = new Set(member.relationships.map(getRelationshipGroupId));

    for (const relationship of member.relationships) {
        if (relationship.type !== "spouse") {
            continue;
        }

        const spouseName = relationship.p1 === member.name ? relationship.p2 : relationship.p1;
        const spouse = familyMembers[spouseName];
        if (!spouse) {
            continue;
        }

        for (const spouseRelationship of spouse.relationships) {
            if (spouseRelationship.type === "parent" && spouseRelationship.p1 === spouse.name) {
                groupIds.add(getRelationshipGroupId(spouseRelationship));
            }
        }
    }

    return groupIds;
}

function syncRelationshipHighlightState() {
    if (!relationshipLayer) {
        return;
    }

    relationshipLayer.classList.toggle("is-highlighting", highlightedRelationshipGroupIds.size > 0);
}

function toggleRelationshipHighlight(member, isHighlighted) {
    for (const groupId of getRelationshipGroupIdsToHighlight(member)) {
        if (isHighlighted) {
            highlightedRelationshipGroupIds.add(groupId);
        }
        else {
            highlightedRelationshipGroupIds.delete(groupId);
        }

        const svg = document.getElementById(groupId);
        svg?.classList.toggle("highlighted", isHighlighted);
    }

    syncRelationshipHighlightState();
}

function initRelationshipRender() {
    if (treeResizeObserver) {
        treeResizeObserver.disconnect();
    }
    if ("ResizeObserver" in window) {
        treeResizeObserver = new ResizeObserver(() => {
            scheduleRelationshipRender();
        });
        treeResizeObserver.observe(treeContainer);
    }
    else {
        window.addEventListener("resize", scheduleRelationshipRender);
    }
}

function scheduleRelationshipRender() {
    if (relationshipRenderFrame) {
        cancelAnimationFrame(relationshipRenderFrame);
    }

    relationshipRenderFrame = requestAnimationFrame(() => {
        relationshipRenderFrame = null;
        renderRelationships();
    });
}

function renderRelationships() {
    if (!relationshipLayer) {
        return;
    }

    relationshipLayer.innerHTML = "";
    const layerRect = relationshipLayer.getBoundingClientRect();

    const groups = [];
    const spouseGroups = [];
    const groupedRelationships = {};

    for (const relationship of relationships) {
        if (relationship.type === "spouse") {
            spouseGroups.push({
                key: getRelationshipGroupId(relationship),
                type: relationship.type,
                relationships: [relationship],
            });
            continue;
        }

        if (relationship.type === "parent" || relationship.type === "godparent") {
            const key = getRelationshipGroupId(relationship);
            if (!groupedRelationships[key]) {
                groupedRelationships[key] = {
                    key,
                    type: relationship.type,
                    relationships: [],
                };
                groups.push(groupedRelationships[key]);
            }
            groupedRelationships[key].relationships.push(relationship);
            continue;
        }

        groups.push({
            key: getRelationshipGroupId(relationship),
            type: relationship.type,
            relationships: [relationship],
        });
    }

    groups.push(...spouseGroups);

    for (const group of groups) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.id = group.key;
        svg.classList.add("relationship-group", group.type);
        svg.classList.toggle("highlighted", highlightedRelationshipGroupIds.has(group.key));
        svg.style.position = "absolute";
        svg.style.inset = "0";
        svg.style.width = "100%";
        svg.style.height = "100%";
        svg.style.overflow = "visible";

        const paths = [];

        for (const relationship of group.relationships) {
            const pathD = getRelationshipPath(relationship, layerRect);
            if (!pathD) {
                continue;
            }

            const outline = document.createElementNS("http://www.w3.org/2000/svg", "path");
            outline.setAttribute("d", pathD);
            outline.classList.add("outline");
            svg.appendChild(outline);

            paths.push({ d: pathD, type: relationship.type });
        }

        for (const pathData of paths) {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", pathData.d);
            path.classList.add(pathData.type);
            svg.appendChild(path);
        }

        relationshipLayer.appendChild(svg);
    }

    syncRelationshipHighlightState();
}

function getMemberElements(memberName) {
    const root = familyMembers[memberName]?.element || null;
    return {
        root,
        portrait: root?.querySelector(".portrait") || null,
        nameContainer: root?.querySelector(".name-container") || null,
    };
}

function isHiddenMember(memberName) {
    return !!familyMembers[memberName]?.hidden;
}

function getElementPoint(element, anchor, layerRect) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2 - layerRect.left;
    const centerY = rect.top + rect.height / 2 - layerRect.top;

    if (anchor === "top-center") {
        return {
            x: centerX,
            y: rect.top - layerRect.top,
        };
    }

    if (anchor === "bottom-center") {
        return {
            x: centerX,
            y: rect.bottom - layerRect.top,
        };
    }

    return {
        x: centerX,
        y: centerY,
    };
}

function getSpouseRelationship(memberName) {
    return familyMembers[memberName]?.relationships.find(candidate => candidate.type === "spouse") || null;
}

function getSpouseRelationshipCenter(memberName, layerRect) {
    const spouseRelationship = getSpouseRelationship(memberName);
    if (!spouseRelationship) {
        return null;
    }

    const spouseName = spouseRelationship.p1 === memberName ? spouseRelationship.p2 : spouseRelationship.p1;
    const memberElements = getMemberElements(memberName);
    const spouseElements = getMemberElements(spouseName);
    const memberAnchor = memberElements.portrait || memberElements.root;
    const spouseAnchor = spouseElements.portrait || spouseElements.root;
    if (!memberAnchor || !spouseAnchor) {
        return null;
    }

    const memberPoint = getElementPoint(memberAnchor, "center", layerRect);
    const spousePoint = getElementPoint(spouseAnchor, "center", layerRect);
    return {
        x: (memberPoint.x + spousePoint.x) / 2,
        y: (memberPoint.y + spousePoint.y) / 2,
    };
}

function getRelationshipEndpoints(relationship, layerRect) {
    const sourceElements = getMemberElements(relationship.p1);
    const targetElements = getMemberElements(relationship.p2);
    const sourceRoot = sourceElements.root;
    const targetRoot = targetElements.root;
    if (!sourceRoot || !targetRoot) {
        return null;
    }

    if (relationship.type === "spouse") {
        const sourcePortrait = sourceElements.portrait || sourceRoot;
        const targetPortrait = targetElements.portrait || targetRoot;
        const sourcePoint = getElementPoint(sourcePortrait, "center", layerRect);
        const targetPoint = getElementPoint(targetPortrait, "center", layerRect);
        const midY = (sourcePoint.y + targetPoint.y) / 2;
        return {
            startPoint: { x: sourcePoint.x, y: midY },
            endPoint: { x: targetPoint.x, y: midY },
        };
    }

    if (relationship.type === "godparent") {
        const sourceElement = sourceElements.nameContainer || sourceRoot;
        const targetElement = targetElements.portrait || targetRoot;
        const sourceNameBottom = getElementPoint(sourceElement, "bottom-center", layerRect).y;
        const targetPortraitTop = getElementPoint(targetElement, "top-center", layerRect).y;
        const midYNudge = relationship.nudgeLines ? nudge * 2 : nudge;
        return {
            startPoint: getElementPoint(sourceElement, "bottom-center", layerRect),
            endPoint: getElementPoint(targetElement, "center", layerRect),
            midY: (sourceNameBottom + targetPortraitTop) / 2 - midYNudge,
            nudgeX: nudge,
            omitStartVertical: isHiddenMember(relationship.p1),
        };
    }

    if (relationship.type === "parent") {
        const spouseCenter = getSpouseRelationshipCenter(relationship.p1, layerRect);
        const sourceElement = sourceElements.nameContainer || sourceRoot;
        const targetElement = targetElements.portrait || targetRoot;
        const sourceNameBottom = getElementPoint(sourceElement, "bottom-center", layerRect).y;
        const targetPortraitTop = getElementPoint(targetElement, "top-center", layerRect).y;
        const midYNudge = relationship.nudgeLines ? nudge : 0;
        return {
            startPoint: spouseCenter || getElementPoint(sourceElement, "bottom-center", layerRect),
            endPoint: getElementPoint(targetElement, "center", layerRect),
            midY: (sourceNameBottom + targetPortraitTop) / 2 - midYNudge,
            omitStartVertical: isHiddenMember(relationship.p1),
        };
    }

    return {
        startPoint: getElementPoint(sourceRoot, "center", layerRect),
        endPoint: getElementPoint(targetRoot, "center", layerRect),
    };
}

function getRelationshipPath(relationship, layerRect) {
    const endpoints = getRelationshipEndpoints(relationship, layerRect);
    if (!endpoints) {
        return null;
    }

    const x1 = endpoints.startPoint.x;
    const y1 = endpoints.startPoint.y;
    const x2 = endpoints.endPoint.x;
    const y2 = endpoints.endPoint.y;

    if (relationship.type === "spouse") {
        return `M ${x1} ${y1} L ${x2} ${y2}`;
    }

    const midY = endpoints.midY ?? (y1 + y2) / 2;
    const nudgeX = endpoints.nudgeX ?? 0;
    if (endpoints.omitStartVertical) {
        return `M ${x1 + nudgeX} ${midY} L ${x2 + nudgeX} ${midY} L ${x2 + nudgeX} ${y2}`;
    }

    return `M ${x1 + nudgeX} ${y1} L ${x1 + nudgeX} ${midY} L ${x2 + nudgeX} ${midY} L ${x2 + nudgeX} ${y2}`;
}