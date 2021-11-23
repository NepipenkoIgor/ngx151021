import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
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
		],
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

	//public ngOnInit() {
	// this.signUpForm.valueChanges.subscribe((v) => {
	// 	console.log(v);
	// });
	// }

	public signup() {
		console.log(this.signUpForm.value);
	}

	public goToSignUp() {
		this.router.navigate(['/login']);
	}
}
