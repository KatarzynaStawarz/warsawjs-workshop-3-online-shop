/**
 * Created by Katarzyna on 05.02.2017.
 */
import {ProductsService} from './products.service';



export const moduleName = 'services';
angular.module(moduleName, [])
    .service('productsService', ProductsService)

