import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IProduct, ProductsService } from '../products.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class OneProductResolver implements Resolve<IProduct | null> {
	public constructor(
		private readonly router: Router,
		private readonly productsService: ProductsService,
	) {}

	public resolve(route: ActivatedRouteSnapshot): Observable<IProduct | null> {
		return this.productsService.getProduct(route.params['id']).pipe(
			map((product: IProduct | null) => {
				if (!product) {
					this.router.navigate(['dashboard']);
				}
				return product;
			}),
			catchError((err) => {
				console.log(err);
				this.router.navigate(['dashboard']);
				return of(null);
			}),
		);
	}
}
