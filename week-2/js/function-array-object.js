// assignment 1 : Function and Array
function max (arr) {
    let val = arr[0];
    for( let i = 0; i < arr.length; i++ ){
        if (arr[i] > val){
            val = arr[i];
        }
    }
    return val;
}

console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));



// assignment 2 : Function and Object
function calculate(obj){
    const n1 = obj.n1;
    const n2 = obj.n2;
    const op = obj.op;
    if( op === '+' ){
        const result = n1 + n2;
        return result;
    } else if ( op === '-' ){
        const result = n1 - n2;
        return result;
    } else if ( op === '*' ){
        const result = n1 * n2;
        return result;
    } else if ( op === '/') {
        const result = n1 / n2;
        return result;
    } else {
        return 'Not supported';
    }

}

console.log(calculate({ n1: 2, n2: 3, op:'+'}))
console.log(calculate({ n1: 5, n2: 2, op:'-'}))
console.log(calculate({ n1: 2, n2: 6, op:'x'}))



// assignment 3 : function, Array, and Object

function calculateDiscount(data) {
    const discount = data.discount;
    let sum = 0;
    for (let i =0; i < data.products.length; i ++){
        sum += data.products[i].price*discount
    }
    return sum;
};

const discountedPrice = calculateDiscount({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100,
        },
        {
            name: "Product 2",
            price: 700,
        },
        {
            name: "Product 3",
            price: 250,
        },
    ]
});

console.log(discountedPrice);