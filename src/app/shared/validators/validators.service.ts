import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class ValidatorsService {
	public withOutSpecialCharacters(control: AbstractControl): ValidationErrors | null {
		const valid = /^[a-zA-Z]*$/.test(control.value);
		return valid
			? null
			: {
					withOutSpecial: 'Field should be without special symbols. $,# ...',
			  };
	}

	public equalFields(control: AbstractControl): ValidationErrors | null {
		const { password, cpassword } = control.value;
		return password === cpassword
			? null
			: {
					notEqual: true,
			  };
	}
}
