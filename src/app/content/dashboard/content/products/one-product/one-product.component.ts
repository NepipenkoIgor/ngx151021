import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';
import { IProduct } from '../products.service';

@Component({
	selector: 'ngx-classwork-one-product',
	templateUrl: './one-product.component.html',
	styleUrls: ['./one-product.component.css'],
})
export class OneProductComponent implements OnInit {
	public product$: Observable<IProduct> = this.activatedRoute.data.pipe(pluck('myProduct'));

	public constructor(private readonly activatedRoute: ActivatedRoute) {}

	public ngOnInit(): void {
		console.log(this.activatedRoute.snapshot);
		this.activatedRoute.queryParams.subscribe((queryParams) => {
			console.log(queryParams);
		});
		this.activatedRoute.fragment.subscribe((fragment) => {
			console.log(fragment);
		});
	}
}
