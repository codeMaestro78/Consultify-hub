/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) { 
    let t_c = {};

    for (const Transaction of transactions) { 
        const { category, price } = transactions;

        if (!t_c[category]) { 
            t_c[category] = 0;
        }
        t_c[category] += price;

    }

    const result = Object.entrie(t_c).map(([category, t_spent]) => ({
        category, t_spent
    }));

    return result;
    console.log(result)
}