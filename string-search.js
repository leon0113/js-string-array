const products = [
    'Dell i20 200gb lapTop',
    'iphne 1tb Phone',
    'nikon d3300 camera',
    'Lg laptop',
    'HTC Phone',
    'Samsung phone n Laptop'
];
const searching = 'laptop';
//indexOf

const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching) != -1) {
        output.push(product);
    }
}
console.log(output);