import {Component} from '@angular/core'

import {ProductStore} from './product.store'

@Component({
  selector: 'fl-products-container',
  template: `
    <fl-products-list [title]="Flux Shop Demo (Walts)"></fl-products-list>
  `
})
export class ProductsContainerComponent {
  private products: any

  constructor(private productStore: ProductStore) {}

  ngOnInit() {
    this.productStore.getAllProducts().subscribe((v) => this.products = v)
  }
}
