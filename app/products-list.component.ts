import { Component, Input } from '@angular/core'

@Component({
  selector: 'fl-products-list',
  template: `
    <div class="shop-wrap">
      <h2 class="uk-h2">{{title}}</h2>
      <fl-product-item-container
        *ngFor="let product of products"
        [key]="product.id"
        [product]="product"
      >
      </fl-product-item-container>
    </div>
  `
})
export class ProductsListComponent {
  @Input() title: any
  @Input() products: any
}
