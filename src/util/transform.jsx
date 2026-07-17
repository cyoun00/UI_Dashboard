export function prepLineData(rows) {
    const data = {};

    for (const row of rows) {
        const date = row.transaction_date;
        const category = row.product_category;

        if (!data[date]) {
            data[date] = { date };
        }

        data[date][category] = (data[date][category] || 0) + 1;
    }

    return Object.values(data).sort((a, b) => new Date(a.date) - new Date(b.date));
}

export function prepBarData(rows) {
    const data = {};

    for (const row of rows) {
        const price = row.unit_price;
        const type = row.product_type;

        if (!data[type]) {
            data[type] = { type };
        }

        data[type]["revenue"] = (data[type]["revenue"] || 0) + price;
    }

    return Object.values(data);
}

export function prepRadarData(rows) {
    const data = {};

    for (const row of rows) {
        const store = row.store_location;
        const category = row.product_category;

        if (!data[store]) {
            data[store] = {
                "name": store,
                "Tea": 0,
                "Coffee": 0,
                "Drinkable Chocolate": 0
            };
        }

        data[store][category]++;
    }

    return Object.values(data);
}

function prepSunburstData(rows) {
    const root = {
        name: "All Products",
        children: []
    };

    const data = {};

    for (const row of rows) {
        const category = row.product_category;
        const type = row.product_type;
        const product = row.product_detail;

        if (!data[category]) {
            data[category] = {
            name: category,
            children: [],
            types: {} 
            };
        }

        if (!data[category].types[type]) {
            data[category].types[type] = {
            name: type,
            children: [],
            products: {}
            };
        }

        if (!data[category].types[type].products[product]) {
            data[category].types[type].products[product] = {
            name: product,
            value: 0
            };
        }

        data[category].types[type].products[product].value++;
    }

    for (const category of Object.values(categories)) {
        const categoryNode = {
            name: category.name,
            children: []
        };

        for (const type of Object.values(category.types)) {
            categoryNode.children.push({
            name: type.name,
            children: Object.values(type.products)
            });
        }

        root.children.push(categoryNode);
    }

    return [root];
}