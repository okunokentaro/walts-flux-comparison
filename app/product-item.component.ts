import { Component, Input, Output, EventEmitter } from '@angular/core'

import { AppStore } from './app.store'

@Component({
  selector: 'fl-product-item',
  template: `
    <div class="uk-panel uk-panel-box uk-margin-bottom">
      <img class="uk-thumbnail uk-thumbnail-mini uk-align-left" [attr.src]="product.image" />
      <h4 class="uk-h4">{{product.title}} - &euro;{{product.price}}</h4>
      <button
        class="uk-button uk-button-small uk-button-primary"
        (click)="onAddToCartClicked"
        [attr.disabled]="{product.inventory > 0 ? '' : 'disabled'}"
      >
        {{product.inventory > 0 ? 'Add to cart' : 'Sold Out'}}
      </button>
    </div>
  `
})
export class ProductItemComponent {
  @Input() product: any
  @Output() addToCartClicked = new EventEmitter<any>()
}
