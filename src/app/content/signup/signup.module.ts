import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';

@NgModule({
	declarations: [SignupComponent],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: SignupComponent,
			},
		]),
	],
})
export class SignupModule {}
