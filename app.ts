/**
 *  Copyright (c) 2015, Fullstack.io
 *  All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  EventEmitter
} from 'angular2/core';

import {bootstrap} from 'angular2/platform/browser';

/**
 * Provides a `Product` object
 */

class Product {
  constructor(
      public sku: string,
      public name: string,
      public imageUrl: string,
      public department: string[],
      public price: number){

  }
}

@Component({
  selector: 'inventory-app',
  template:`
    <div class="inventory-app">
      (Products will go here soon)
    </div>
  `
})

class InventoryApp {

}

bootstrap(InventoryApp);