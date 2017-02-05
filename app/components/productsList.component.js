/**
 * Created by Katarzyna on 05.02.2017.
 */
const template = `
    <!--{{ $ctrl.products | json }}-->
    <product-item ng-repeat="product in $ctrl.products" item="product" on-add-to-cart="$ctrl.addToCart(product, amount)"></product-item>
    <p ng-if="!$ctrl.products.length">No items yet. Subscribe to our fantastic newsletter!</p>
`

class ProductListController {

  addToCart(product, amount) {
    this.requestAddToCart({product, amount})//this.requestAddToCart({product: product, amount: amount})
  }
}
export const name = 'productsList';
export const properties = {
  template,
    bindings: {
      products: '<items',
        requestAddToCart: '&onAddToCart'
    },
    controller: ProductListController
};
