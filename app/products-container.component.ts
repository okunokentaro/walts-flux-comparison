import { Component } from '@angular/core'

import { ProductStore } from './product.store'
import { Product } from './product'

@Component({
  selector: 'fl-products-container',
  template: `
    <fl-products-list
      [title]="'Flux Shop Demo (Walts)'"
      [products]="products"
    ></fl-products-list>
  `
})
export class ProductsContainerComponent {
  private products: Product[]

  constructor(private productStore: ProductStore) {}

  ngOnInit() {
    this.productStore.getAllProducts().subscribe((v) => this.products = v)
  }
}
