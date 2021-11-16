import { Component, Input } from '@angular/core';
import { IProduct } from '../products.service';
import { ModalService } from '../modal/modal.service';

@Component({
	selector: 'ngx-classwork-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css'],
	// providers: [ProductsService],
})
export class ProductCardComponent {
	@Input()
	public product!: IProduct;

	@Input()
	public isOdd!: boolean;

	public constructor(private readonly modalService: ModalService) {}

	public async addToCart() {
		const m = await import('./confirm-product/confirm-product.component');
		this.modalService.open({
			component: m.ConfirmProductComponent,
			context: {
				product: { ...this.product },
				add: () => {
					console.log('Add to Cart');
					this.modalService.close();
				},
				close: () => {
					console.log('Close');
					this.modalService.close();
				},
			},
		});
	}
}
