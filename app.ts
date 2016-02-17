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
      <product-list
        [productlist]="products"
        (onProductSelected)="productWasSelected($event)">
      </product-list>
    </div>
  `
})

class InventoryApp {
  products: Product[];

  constructor(){
    this.products = [
        new Product(
            'MYSHOES', 'Black Running Shoes',
            '/resources/images/products/black-shoes.jpg',
            ['Men', 'Shoes', 'Running Shoes'],
            109.99),
      new Product(
              'NEATOJACKET', 'Blue Jacket',
              '/resources/images/products/blue-jacket.jpg',
              ['Women', 'Apparel', 'Jackets & Vests'],
              283.99),
      new Product(
              'NICEHAT', 'A Nice Black Hat',
              '/resources/images/products/black-hat.jpg',
              ['Men', 'Accessories', 'Hats'],
              29.99),
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}

bootstrap(InventoryApp);