import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';
import { PreloadStrategyService } from './preload-strategy.service';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule),
		canActivate: [AuthGuard],
		data: {
			title: 'Login page',
		},
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
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadStrategyService })],
	exports: [RouterModule],
	providers: [PreloadStrategyService],
})
export class AppRoutingModule {}
