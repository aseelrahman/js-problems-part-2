const numbers = [300, 100, 700, 1200];

const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1200},
]

function getShoppingTotal(products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price;
    }
    return sum;
}

const total = getShoppingTotal(products);
console.log('Total ajke khosabe: ', total);
