/**
 * Created by Katarzyna on 05.02.2017.
 */
class ShopLogoController {
    constructor() {
        this.source = '../image/warsawjs-logo.png'
        this.width = 'auto'
    }
    $onInit(){
        if (this.size === 'medium') {
            this.width = '200px';
        } else {
            this.width = '75px';
        }
    }
}

export const name = 'shopLogo';
export const properties = {
    template: `
<image ng-src = '{{$ctrl.source}}' width="{{$ctrl.width}}">
`,
    controller: ShopLogoController,
    bindings: {
        size: '@'
    }
};