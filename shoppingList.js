const shoppingList = (groceries) => {
    let formattedString = '';
    groceries.forEach((item) => {
        formattedString += `${item.item}: ${item.quantity}\n`;
    });
    return formattedString.trim();
};

const groceryItems = [
    { item: 'Apples', quantity: 3 },
    { item: 'Bananas', quantity: 5 },
    { item: 'Milk', quantity: 1 },
    { item: 'Bread', quantity: 2 }
];

const formattedList = shoppingList(groceryItems);
console.log(formattedList);
