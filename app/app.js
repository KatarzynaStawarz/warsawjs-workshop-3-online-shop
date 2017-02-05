import ApplicationController from './application.controller';
import {moduleName as componentsModuleName} from './components/components.module.js';
import {moduleName as servicesModuleName} from './services/services.module';

export const moduleName = 'shop';

angular.module(moduleName, [componentsModuleName, servicesModuleName])
    .controller('ApplicationController', ApplicationController)
    .filter('pluralize', ()=> (name, amount) => amount>1 ? name + 's' : name)


