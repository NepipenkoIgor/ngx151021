import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

export interface IProduct {
	_id: string;
	title: string;
	img: string;
	price: number;
	author: string;
	isFavorite: boolean;
}

@Injectable()
export class ProductsService {
	public timestamp = Date.now();

	public constructor(private readonly http: HttpClient) {}

	public getProducts(): Observable<any> {
		return this.http.get<{ data: IProduct[] }>(`/products`).pipe(
			catchError((err) => {
				console.log(err);
				return of([]);
			}),
		);
	}
}
