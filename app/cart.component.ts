import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'fl-cart-container',
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
      <div class="uk-margin-small-bottom">Total: &euro;{{this.props.total}}</div>
      <button
        class="uk-button uk-button-large uk-button-success uk-align-right"
        (click)="this.props.onCheckoutClicked"
        [attr.disabled]="{hasProducts ? '' : 'disabled'}"
      >
        Checkout
      </button>
    </div>
  `
})
export class CartContainerComponent {
  @Input() products: any
  @Input() total: any
  @Output() checkoutClicked = new EventEmitter<any>()
}
