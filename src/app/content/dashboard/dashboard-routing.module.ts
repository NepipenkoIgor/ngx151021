import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'products',
				loadChildren: () =>
					import('./content/products/products.module').then((m) => m.ProductsModule),
			},
			{
				path: 'profile',
				loadChildren: () => import('./content/profile/profile.module').then((m) => m.ProfileModule),
			},
			{
				path: '**',
				redirectTo: 'products',
			},
		],
	},
];

// const routes: Routes = [
// 	{
// 		path: 'login',
// 		loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule),
// 	},
// 	{
// 		path: 'signup',
// 		loadChildren: () => import('./content/signup/signup.module').then((m) => m.SignupModule),
// 	},
// 	{
// 		path: 'dashboard',
// 		loadChildren: () =>
// 			import('./content/dashboard/dashboard.module').then((m) => m.DashboardModule),
// 	},
// 	{
// 		path: '**',
// 		redirectTo: 'dashboard',
// 	},
// ];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
