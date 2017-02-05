export default class ApplicationController {
    constructor(productsService) {
        this.productsService = productsService

        //this.promotedProductsService = promotedProductsService
        //this.promotedProducts = promotedProductsService.products,
            this.inCartProducts = [],
            this.totalPrice = 0
    }
    $onInit() {
        this.productsService.loadProducts()
    }
    get products() {

        return this.productsService.products
    }
    addProductToCart(product, amount) {
        const checkIsInShopCart = this.inCartProducts.filter(function (it) {
                if (product.name == it.name) {
                    return true;
                }
                return false;
            }
        )
        if (checkIsInShopCart.length == 0) {
            product.amount = amount;

            this.inCartProducts.push(product)
        } else {
            product.amount += amount;
        }
        ;
    }
}

