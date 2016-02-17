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
      <h1>{{product.name}}</h1>
      <span>{{product.sku}}</span>
    </div>
  `
})

class InventoryApp {
  product: Product;

  constructor(){
    this.product = new Product(
    'NICEHAT', 'A Nice Black Hat',
    '/resources/images/products/black-hat.jpg',
    ['men', 'Accessories', 'Hats'],
    29.99);


  }
}

bootstrap(InventoryApp);