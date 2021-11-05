import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './data';

@Pipe({
	name: 'productsFilter',
	pure: false,
})
export class ProductsFilterPipe implements PipeTransform {
	public transform(
		products: IProduct[] = [],
		searchText: string = '',
		onlyFavorites = false,
	): IProduct[] {
		console.log('CALC');
		let result: IProduct[] = products;
		if (onlyFavorites) {
			result = result.filter((p: IProduct) => p.isFavorite === onlyFavorites);
		}
		if (!searchText) {
			return result;
		}
		return result.filter((p: IProduct) =>
			`${p.title}${p.price}`.toLowerCase().includes(searchText.toLowerCase()),
		);
	}
}
