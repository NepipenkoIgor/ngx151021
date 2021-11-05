import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IProduct {
	_id: string;
	title: string;
	img: string;
	price: number;
	author: string;
	isFavorite: boolean;
}

export const products: IProduct[] = [
	{
		_id: '6185599f512f9806ed3f140a',
		title: 'Moto 2X',
		img: 'assets/img/product-2.jpg',
		price: 221,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '6185599f512f9806ed3f140b',
		title: 'Galaxy S3',
		img: 'assets/img/product-5.jpg',
		price: 23,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		_id: '6185599f512f9806ed3f140c',
		title: 'IPad 12 pro',
		img: 'assets/img/product-6.jpg',
		price: 2344,
		author: 'Apple',
		isFavorite: false,
	},
	{
		_id: '6185599f512f9806ed3f140d',
		title: 'Moto 11',
		img: 'assets/img/product-4.jpg',
		price: 2345,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '6185599f512f9806ed3f140e',
		title: 'Moto 31',
		img: 'assets/img/product-7.jpg',
		price: 334,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '6185599f512f9806ed3f140f',
		title: 'IPad 8',
		img: 'assets/img/product-8.jpg',
		price: 22,
		author: 'Apple',
		isFavorite: false,
	},
	{
		_id: '6185599f512f9806ed3f1410',
		title: 'Galaxy A',
		img: 'assets/img/product-3.jpg',
		price: 333,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		_id: '6185599f512f9806ed3f1411',
		title: 'IPad 10',
		img: 'assets/img/product-9.jpg',
		price: 1200,
		author: 'Apple',
		isFavorite: true,
	},
	{
		_id: '6185599f512f9806ed3f1412',
		title: 'Galaxy 10',
		img: 'assets/img/product-1.jpg',
		price: 200,
		author: 'Samsung',
		isFavorite: true,
	},
];

export const products$ = of(products).pipe(delay(5000));

// --5s--[]|
