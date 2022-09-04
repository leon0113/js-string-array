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

const output = [];
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);