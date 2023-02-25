// fallback data in case the server is down or there is no server
const items = [
    {
        id: 1,
        item_name: "Apples",
        quantity: "lb"
    },
    {
        id: 2,
        item_name: "Cereal",
        quantity: "box"
    },
    {
        id: 3,
        item_name: "Eggs (12)",
        quantity: "carton"
    },
    {
        id: 4,
        item_name: "Milk",
        quantity: "L"
    },
    {
        id: 5,
        item_name: "Orange Juice",
        quantity: "L"
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
        update_date: new Date("2023-01-02"),
        store: "Walmart"
    },
    {
        id: 1,
        price: "2.99",
        update_date: new Date("2022-12-15"),
        store: "Walmart"
    },
    {
        id: 2,
        price: "4.99",
        update_date: new Date("2022-12-15"),
        store: "Walmart"
    },
    {
        id: 2,
        price: "5.99",
        update_date: new Date("2022-12-16"),
        store: "Walmart"
    }
];

const exampleData = {
    items: items,
    stores: stores,
    prices: prices
};

export default exampleData;