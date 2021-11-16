import { Injectable, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IModalData {
	component: Type<any>;
	context: { [key: string]: any };
}

// let userHashMap: { [key: string]: { name: string } } = {
// 	asd123123: {
// 		name: 'Ihor',
// 	},
// };
//
// console.log(userHashMap);

@Injectable()
export class ModalService {
	public modalSequence$$ = new Subject<IModalData | null>();

	public open(data: IModalData) {
		this.modalSequence$$.next(data);
	}

	public close() {
		this.modalSequence$$.next(null);
	}

	public get modalSequence$(): Observable<IModalData | null> {
		return this.modalSequence$$.asObservable();
	}
}
