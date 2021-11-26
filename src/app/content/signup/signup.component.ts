import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { ValidatorsService } from '../../shared/validators/validators.service';

@Component({
	selector: 'ngx-classwork-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
	public signUpForm = this.fb.group({
		username: [
			'',
			[
				Validators.required,
				Validators.minLength(4),
				this.validatorsService.withOutSpecialCharacters,
			],
			[this.validatorsService.uniqueName.bind(this.validatorsService)],
		],
		male: [false],
		emails: this.fb.array([['', [Validators.required]]]),
		passwords: this.fb.group(
			{
				password: [''],
				cpassword: [''],
			},
			{ validators: [this.validatorsService.equalFields] },
		),
	});

	public constructor(
		private readonly router: Router,
		private readonly validatorsService: ValidatorsService,
		private readonly fb: FormBuilder,
	) {}

	public getControls(control: AbstractControl, path: string | string[]): AbstractControl[] {
		return (control.get(path) as FormArray).controls;
	}

	public addEmail() {
		(this.signUpForm.get('emails') as FormArray).push(this.fb.control('', [Validators.required]));
	}

	public removeEmail(index: number) {
		(this.signUpForm.get('emails') as FormArray).removeAt(index);
	}

	public signup() {
		console.log(this.signUpForm.value);
	}

	public goToSignUp() {
		this.router.navigate(['/login']);
	}
}
