import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { ValidatorsService } from '../../shared/validators/validators.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store';
import { signUpPending } from '../../store/actions/auth.actions';

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
		private readonly store: Store<IAppState>,
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
		const {
			passwords: { password },
			...user
		} = this.signUpForm.value;
		this.store.dispatch(signUpPending({ user: { ...user, password } }));
	}

	public goToSignUp() {
		this.router.navigate(['/login']);
	}
}
