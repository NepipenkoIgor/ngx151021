import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'altPrefix',
})
export class AltPrefixPipe implements PipeTransform {
	public transform(item: any, key: string): string {
		return `Image of ${item[key]}`;
	}
}
