import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ProfileComponent],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProfileComponent,
			},
		]),
	],
})
export class ProfileModule {}
