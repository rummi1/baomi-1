const families = ["Yoret", "Estin", "Tamoth"];

const family_members_data = [
    {
        name: "Oleel",
        family: 0,
        title: "The Curator",
    },
    {
        name: "Orvet",
        family: 1,
        crowned: 'ruler-f-1',
        title: "The Temperate",
    },
    {
        name: "BeseetParent",
        hidden: true,
    },
    {
        name: "Beseet",
        family: 2,
        title: "The Peaceable",
    },
    {
        name: "Feif",
        family: 2,
        title: "The Exile",
    },
    {
        name: "Basheel",
        family: 1,
        title: "The Explorer",
    },
    {
        name: "Celdei",
        family: 0,
        title: "The Soft-Voiced",
    },
    {
        name: "Corvin",
        family: 1,
        title: "The Beautiful",
    },
    {
        name: "Taal",
        family: 1,
        crowned: 'ruler-f-2',
        title: "The Talai to All", // just hardcode this
    },
    {
        name: "Lemal",
        family: 0,
        title: "The Gate Opener"
    },
    {
        name: "Telai",
        family: 2,
        title: "The Forgotten",
    },
    {
        name: "Lemot",
        family: 0,
        crowned: 'ruler-m-3',
        title: "The Vanquished",
    },
    {
        name: "Tyreil",
        family: 0,
        title: "The Seer",
    },
    {
        name: "Nolveth",
        family: 2,
        crowned: 'ruler-m-4',
        title: "The Heir of Beasts",
    },
    {
        name: "Caldosa",
        family: undefined,
        title: "The Bloodless",
    },
    {
        name: "Nyreen",
        family: 2,
        crowned: 'ruler-nb-5',
        title: "The Usurper's Heir",
    },
    {
        name: "Sartina",
        family: 0,
        title: "The Wayward",
        nudgeLines: true,
    },
    {
        name: "Yaron",
        family: 0,
        title: "The Tall",
    },
    {
        name: "Amath",
        family: 1,
        crowned: 'ruler-f-6',
        title: "The Restorer",
    },
    {
        name: "Aarna",
        family: 1,
        title: "The Royal Rider",
    },
    {
        name: "Roal",
        family: 1,
        crowned: 'ruler-m-7',
        title: "The Prosperous",
    },
    {
        name: "Soleel",
        family: 0,
        title: "The Songbird",
    },
    {
        name: "Morfal",
        family: 0,
        title: "The Quartermaster",
    },
    {
        name: "Narset",
        family: 2,
        title: "The Eccentric",
    },
    {
        name: "Eirlov",
        family: 0,
        title: "The Clipped Wings",
    },
    {
        name: "Ervala",
        family: 2,
        title: "The Earthen",
    },
    {
        name: "Oreleth",
        family: 0,
        crowned: 'ruler-m-8',
        title: "The Stalwart",
    },
    {
        name: "Lysna",
        family: 1,
        title: "The Nurse",
    },
    {
        name: "Ludir",
        family: 1,
        title: "The False Heir",
    },
    {
        name: "Temig",
        family: 0,
        title: "The Newlywed",
    },
    {
        name: "Lonara",
        family: 2,
        title: "The True Heir",
        crowned: 'ruler-f-9',
        hideCrowned: true,
    },
];

const generations_data = `
        |           |           |           | BeseetParent |
        | Oleel     | Orvet     | Beseet    |           | Feif
Basheel | Celdei    | Corvin    | Taal      | Lemal     | Telai
        | Lemot     | Tyreil    |           | Caldosa   | Nolveth
Amath   | Yaron     |           | Sartina   |           | Nyreen
Aarna   |           | Roal      | Soleel    | Morfal    | Narset
        | Lysna     | Oreleth   |           | Ervala    | Eirlov
        | Ludir     |           | Temig     | Lonara    |
`;

const relationships_data = [
    ["Orvet", "parent", "Basheel"],
    ["Orvet", "parent", "Corvin"],
    ["Orvet", "parent", "Taal"],
    ["Oleel", "godparent", "Basheel"],
    ["Oleel", "godparent", "Corvin"],
    ["Oleel", "godparent", "Taal"],
    ["Oleel", "parent", "Celdei"],
    ["Celdei", "parent", "Lemot"],
    ["Orvet", "spouse", "Beseet"],
    ["Celdei", "spouse", "Corvin"],
    ["BeseetParent", "parent", "Beseet"],
    ["BeseetParent", "parent", "Feif"],
    ["Lemot", "spouse", "Tyreil"],
    ["Feif", "parent", "Telai"],
    ["Telai", "parent", "Nolveth"],
    ["Taal", "parent", "Caldosa"],
    ["Taal", "spouse", "Lemal"],
    ["Telai", "parent", "Nolveth"],
    ["Caldosa", "spouse", "Nolveth"],
    ["Lemot", "parent", "Sartina"],
    ["Nolveth", "parent", "Nyreen"],
    ["Yaron", "spouse", "Amath"],
    ["Amath", "parent", "Aarna"],
    ["Amath", "parent", "Roal"],
    ["Sartina", "parent", "Morfal"],
    ["Sartina", "parent", "Soleel"],
    ["Morfal", "spouse", "Narset"],
    ["Eirlov", "spouse", "Ervala"],
    ["Morfal", "parent", "Ervala"],
    ["Ervala", "parent", "Lonara"],
    ["Temig", "spouse", "Lonara"],
    ["Roal", "spouse", "Soleel"],
    ["Roal", "parent", "Oreleth"],
    ["Oreleth", "spouse", "Lysna"],
    ["Oreleth", "parent", "Ludir"],
    ["Basheel", "godparent", "Lemot"],
    ["Lysna", "godparent", "Lonara"],
]