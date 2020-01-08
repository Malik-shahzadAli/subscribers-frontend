import { ForgotPasswordComponent } from './views/pages/auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './views/pages/auth/register/register.component';
// import { Component } from './views/pages/auth/register/register.component';
import { LoginComponent } from './views/pages/auth/login/login.component'


import { UploadFileComponent } from './views/pages/upload-file/upload-file.component';
import { MyPageComponent } from './views/pages/my-page/my-page.component'
// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
import { ErrorPageComponent } from './views/theme/content/error-page/error-page.component';
// Auth
import { AuthGuard } from './core/auth';


const routes: Routes = [
	{path: 'auth', loadChildren: () => import('app/views/pages/auth/auth.module').then(m => m.AuthModule)},

	{
		path: '',
		component: BaseComponent,
		// canActivate: [AuthGuard],
		children: [
			{
				path: 'kt-login__form',
				component:RegisterComponent
			},
			{
				path: 'kt-login',
				component:LoginComponent
			},
			{
				path:'forgot-password',
				component:ForgotPasswordComponent
			},

			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					'type': 'error-v6',
					'code': 403,
					'title': '403... Access forbidden',
					'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
				}
			},
		
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'kt-login__form', pathMatch: 'full'},
			{path: '**', redirectTo: 'kt-login__form', pathMatch: 'full'}
		]
	},

	{path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
