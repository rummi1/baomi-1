const storageKey = "trevosa-data";

function readStoredData() {
    try {
        const rawValue = window.localStorage.getItem(storageKey);
        if (!rawValue) {
            return {};
        }

        const parsedValue = JSON.parse(rawValue);
        if (!parsedValue || typeof parsedValue !== "object" || Array.isArray(parsedValue)) {
            return {};
        }

        upgrade(parsedValue);
        return parsedValue;
    }
    catch {
        return {};
    }
}

function readTrevosaDataSection(sectionName) {
    const sectionValue = storedData[sectionName];
    if (!sectionValue || typeof sectionValue !== "object" || Array.isArray(sectionValue)) {
        return null;
    }

    return sectionValue;
}

function writeTrevosaDataSection(sectionName, sectionValue) {
    storedData = {
        ...storedData,
        version: 2,
        [sectionName]: sectionValue,
    };

    try {
        window.localStorage.setItem(storageKey, JSON.stringify(storedData));
    }
    catch {
        // Ignore storage failures under restricted browser modes.
    }
}

function upgrade(data) {
    if (data.version === 1) {
        // Convert ids
        const discoveredIds = data.documents.discoveredIds || [];
        const migratedDiscoveredIds = discoveredIds.map(id => id_migration[id] || null).filter(id => id !== null);
        data.documents.discoveredIds = migratedDiscoveredIds;

        const bookmarkMap = {};
        for (const [id, color] of Object.entries(data.documents.bookmarkColors)) {
            const migratedId = id_migration[id];
            if (migratedId) {
                bookmarkMap[migratedId] = color;
            }
        }
        data.documents.bookmarkColors = bookmarkMap;

        // Reset Ludir, Temig, and Lonara
        data.tree.members.Ludir.solved = false;
        data.tree.members.Temig.solved = false;
        data.tree.members.Lonara.solved = false;

        // Remove "end" from the discoveredIds
        data.documents.discoveredIds = data.documents.discoveredIds.filter(id => id !== "end");

        // Music
        if (data.settings?.musicMuted) {
            data.settings.musicVolume = 0;
        }

        data.version = 2;
    }
}

// Maps v1 numeric document IDs to v2 unique IDs.
const id_migration = {
    0: "coronation",
    1: "concord",
    2: "succession",
    3: "rules",
    4: "calserem",
    5: "lemot-last-words",
    6: "proclamation",
    7: "restoration",
    8: "scouting-report",
    9: "transit-solution",
    10: "security-check",
    11: "performance-eval",
    12: "tutoring",
    13: "note-to-roal",
    14: "realms",
    15: "aarna-to-soleel",
    16: "baby-announcement",
    17: "great-expectations",
    18: "monster",
    19: "great-passage",
    20: "plea-from-cyno",
    21: "basheel-speech",
    22: "funeral-diary",
    23: "archive-created",
    24: "stalwart-1",
    25: "stalwart-2",
    26: "letter-to-talai",
    27: "ode-to-oleel",
    28: "letter-to-exile",
    29: "threatening-note",
    30: "passive-aggressive",
    31: "basheel-journal",
    32: "lemot-born",
    33: "adopted-heir",
    34: "heir-rejection",
    35: "death-of-taal",
    36: "cyno-yen",
    37: "prophecy",
    38: "rumors",
    39: "catalog",
    40: "opening",
    41: "shout-of-war",
    42: "war-began",
    43: "war-sickness",
    44: "war-crowned",
    "end": "end",
    "intro": "intro",
    "start": "signal"
};

let storedData = readStoredData();