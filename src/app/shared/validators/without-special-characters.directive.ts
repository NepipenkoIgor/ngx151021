import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ValidatorsService } from './validators.service';

// function validate(control: FormControl): ValidationErrors | null {
// 	const valid = /^[a-zA-Z]*$/.test(control.value);
// 	return valid
// 		? null
// 		: {
// 				withOutSpecial: 'Field should be without special symbols. $,# ...',
// 		  };
// }

@Directive({
	selector: '[ngxClassworkWithoutSpecialCharacters]',
	providers: [
		{
			provide: NG_VALIDATORS,
			// useValue: validate,
			useExisting: WithoutSpecialCharactersDirective,
			multi: true,
		},
	],
})
export class WithoutSpecialCharactersDirective implements Validator {
	public constructor(private readonly validatorsService: ValidatorsService) {}

	public validate(control: FormControl): ValidationErrors | null {
		return this.validatorsService.withOutSpecialCharacters(control);
	}
}
