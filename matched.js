const numbers = [53, 37, 32, 56, 94];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    // console.log(number);
}

const products = [
    {id: 1, name: 'one plus 12 Phone', price: 700000},
    {id: 2, name: 'xaiomi 14 ultra phone', price: 109000},
    {id: 3, name: 'mac book air', price: 190000},
    {id: 4, name: 'iPhone', price: 110000},
    {id: 5, name: 'dell latitude laptop', price: 200000},
    {id: 6, name: 'samsung phone s24 ultra ', price: 120000},
    {id: 7, name: 'vivo x100 ultra Phone ', price: 900000},
    {id: 8, name: 'asus tuff laptop', price: 290000},
    {id: 8, name: 'dell alien LapTOP', price: 290000},
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);
