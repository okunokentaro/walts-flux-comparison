import { Component, Input, Output, EventEmitter } from '@angular/core'

import { ProductInCart } from './product'

@Component({
  selector: 'fl-cart',
  template: `
    <div class="cart uk-panel uk-panel-box uk-panel-box-primary">
      <div class="uk-badge uk-margin-bottom">Your Cart</div>
      <div class="uk-margin-small-bottom">
        <div *ngIf="!hasProducts">Please add some products to cart.</div>
        <div *ngIf="hasProducts">
          <div
            *ngFor="let p of products"
            key="p.id"
          >
            {{p.title}} - &euro;{{p.price}} x {{p.quantity}}
          </div>
        </div>
      </div>
      <div class="uk-margin-small-bottom">Total: &euro;{{total}}</div>
      <button
        class="uk-button uk-button-large uk-button-success uk-align-right"
        (click)="onClick($event)"
        [attr.disabled]="!hasProducts ? true : null"
      >
        Checkout
      </button>
    </div>
  `
})
export class CartComponent {
  @Input() products: ProductInCart[]
  @Input() total: string
  @Output() checkoutClicked = new EventEmitter<any>()
  private hasProducts: boolean

  ngOnChanges() {
    if (!this.products) {
      return
    }
    this.hasProducts = this.products.length > 0
  }

  onClick(ev: MouseEvent) {
    this.checkoutClicked.emit(ev)
  }
}
