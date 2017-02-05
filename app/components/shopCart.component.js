const template = `
    <div ng-repeat="product in $ctrl.products">
    Shop cart {{ product.name }} - amount {{ product.amount }}: price {{product.amount*product.price}}
    Sum: {{}}
    </div>`
class ShopCartController {
    constructor(){

    }
}

export const name = 'shopCart'
export const properties = {
    template,
    bindings: {
        products: '<items'
    },
    controller: ShopCartController
}