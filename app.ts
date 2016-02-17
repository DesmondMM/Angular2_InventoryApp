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

/**
 * @ProductRow: A component for the view of a single Product
 */
@Component({
  selector:'product-row',
  inputs:['product-row'],
  outputs:['product'],
  host: {'class': 'item'},
  directives:[ProductImage, ProductDepartment, PriceDisplay],
})

/**
 * @ProductList: A componet for rendering all ProductRows and
 * storing the currently selected Product
 */
@Component({
  selector: 'products-list',
  directives: [ProductRow],
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
  <div class="ui items">
    <product-row
      *ngFor="myProduct of productList"
      [product]="myProduct"
      (click)="clicked(myProduct)"
      [class.selected]="isSelected(myProduct)">
    </product-row>
  </div>
  `
})

class ProductList {
  /**
   * @input productList - hte Product[] passed to us
   */
  productList: Product[];

  /**
   * @output onProductSelected - outputs the current
   *          Product whenever a new Product is selected
   */
  onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing
   *            the currently selected `Product`
   */
  currentProduct: Product;

  constructor(){
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}

@Component({
  selector: 'inventory-app',
  directives: [ProductsList],
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