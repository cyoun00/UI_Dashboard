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

        if (!data[category]) {
            data[category] = {
                "name": category,
                "Hell's Kitchen": 0,
                "Lower Manhattan": 0,
                "Astoria": 0
            };
        }

        data[category][store]++;
    }

    return Object.values(data);
}

export function prepSunburstData(rows) {
    const root = {
        name: "All Products",
        value: 0,
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
            value: 0,
            types: {} 
            };
        }

        if (!data[category].types[type]) {
            data[category].types[type] = {
            name: type,
            value: 0,
            products: {}
            };
        }

        if (!data[category].types[type].products[product]) {
            data[category].types[type].products[product] = {
            name: product,
            value: 0
            };
        }

        data[category].types[type].products[product].value += 1;
        data[category].types[type].value += 1;
        data[category].value += 1;
        root.value += 1;
    }

    for (const category of Object.values(data)) {
        category.children = Object.values(category.types);

        for (const type of category.children) {
            type.children = Object.values(type.products);
            delete type.products;
        }

        delete category.types;

        root.children.push(category);
    }

    return root;
}