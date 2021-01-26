import logo from "../logo.svg"

var productList = []

for(var i=1;i<101;i++) {
    var product = {
        index: i,
        name: `bed${i}`,
        price: 1200,
        productImage: logo,
    }
    productList.push(product);
}

export default productList;