import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule),
		canActivate: [AuthGuard],
	},
	{
		path: 'signup',
		loadChildren: () => import('./content/signup/signup.module').then((m) => m.SignupModule),
		canActivate: [AuthGuard],
	},
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./content/dashboard/dashboard.module').then((m) => m.DashboardModule),
		canActivate: [AuthGuard],
	},
	{
		path: '**',
		redirectTo: 'dashboard',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
