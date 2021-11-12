import { Component, Host, Inject, Input } from '@angular/core';
import { IProduct, ProductsService } from '../products.service';

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

	public constructor(@Host() @Inject(ProductsService) private readonly productsService: number) {
		console.log(this.productsService);
	}
}
