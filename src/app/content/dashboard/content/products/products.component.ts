import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { IProduct } from './products.service';
import { Store } from '@ngrx/store';
import { getProductsPending } from './store/actions/products.actions';
import { IAppState } from '../../../../store';
import { IProductsState } from './store';

@Component({
	selector: 'ngx-classwork-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
	public searchText = '';

	public onlyFavorites = false;

	public products$: Observable<IProduct[]> = this.store.select('products');

	public constructor(private readonly store: Store<IAppState & IProductsState>) {}

	public ngOnInit() {
		this.store.dispatch(getProductsPending());
	}

	public checkOnlyFavorites(e: MatCheckboxChange) {
		this.onlyFavorites = e.checked;
	}
}
