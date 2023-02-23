// fallback data in case the server is down or there is no server
const items = [
    {
        id: 1,
        name: "Apples",
        pricePer: "lb"
    },
    {
        id: 2,
        name: "Cereal",
        pricePer: "box"
    },
    {
        id: 3,
        name: "Eggs (12)",
        pricePer: "carton"
    },
    {
        id: 4,
        name: "Milk",
        pricePer: "L"
    },
    {
        id: 5,
        name: "Orange Juice",
        pricePer: "L"
    }
];

const stores = [
    {
        name: "Walmart",
        colour: 'rgb(1, 15, 255)'
    },
    {
        name: "No Frills",
        colour: 'rgb(180, 180, 5)'
    }
];

const prices = [
    {
        id: 1,
        price: "3.99",
        date: "2023-01-02",
        store: "Walmart"
    },
    {
        id: 1,
        price: "2.99",
        date: "2022-12-15",
        store: "Walmart"
    },
    {
        id: 2,
        price: "4.99",
        date: "2022-12-15",
        store: "Walmart"
    },
    {
        id: 2,
        price: "5.99",
        date: "2022-12-16",
        store: "Walmart"
    }
];

const exampleData = {
    items: items,
    stores: stores,
    prices: prices
};

export default exampleData;