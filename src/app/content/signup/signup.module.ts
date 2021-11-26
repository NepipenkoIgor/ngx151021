import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SwitcherComponent } from './switcher/switcher.component';

@NgModule({
	declarations: [SignupComponent, SwitcherComponent],
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
