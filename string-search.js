const products = [
    'Dell i20 200gb lapTop',
    'Dell i25 200gb lapTop',
    'iphne 1tb Phone',
    'nikon d3300 camera',
    'Lg laptop',
    'HTC Phone',
    'Samsung phone n Laptop'
];
const searching = 'dell';
// includes
const output = [];
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);
// startsWith
const output1 = [];
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output1.push(product);
    }
}
console.log(output1);