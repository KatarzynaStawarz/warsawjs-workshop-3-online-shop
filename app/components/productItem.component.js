/**
 * Created by Katarzyna on 05.02.2017.
 */
class ProductItemController {
    constructor() {
        this.count = 0;
    }

    countPicked() {
        this.addToCart({amount: this.count})
        this.count = 0;
    }
}
const template = `
<div>
 <h2>{{ $ctrl.product.name}}</h2>
  <p>for only {{ $ctrl.product.price | currency : 'PLN'}}</p>
  <p>{{$ctrl.product.description}}</p>
  <p>Add to cart</p>
  <form name="itemForm">
  <label>Amount
  <input type="number" ng-model="$ctrl.count" min="1" max"100"/>
  </label>
  <button ng-disabled="itemForm.$invalid" ng-click="$ctrl.countPicked()">Dodaj do koszyka</button>
  <!--IS VALID: {{ itemForm.$valid}}-->
  </form>
  </div>`
export const name = 'productItem';
export const properties = {
    template,
    bindings: {
        product: '<item',
        addToCart: '&onAddToCart'
    },
    controller: ProductItemController
};
