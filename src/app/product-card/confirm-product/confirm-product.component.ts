import { Component, Input, NgModule, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../products.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ngx-classwork-confirm-product',
	templateUrl: './confirm-product.component.html',
	styleUrls: ['./confirm-product.component.css'],
})
export class ConfirmProductComponent implements OnInit, OnDestroy {
	@Input()
	public product!: IProduct;

	public add!: Function;

	public close!: Function;

	public ngOnInit() {
		console.log('INIT');
	}

	public ngOnDestroy() {
		console.log('DESTROY');
	}
}

@NgModule({
	declarations: [ConfirmProductComponent],
	imports: [MatButtonModule, MatCardModule, CommonModule],
})
export class ConfirmProductModule {}
