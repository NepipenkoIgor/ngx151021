import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of, switchMap } from 'rxjs';

@Injectable()
export class ValidatorsService {
	public constructor(private readonly http: HttpClient) {}

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

	public uniqueName(control: AbstractControl): Observable<ValidationErrors | null> {
		const username = control.value;

		return of(username).pipe(
			delay(500),
			switchMap(() => {
				return this.http.post('/auth/checkUsername', { username });
			}),
		);
	}
}
