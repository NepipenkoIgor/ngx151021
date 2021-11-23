import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WithoutSpecialCharactersDirective } from './validators/without-special-characters.directive';
import { ValidatorsService } from './validators/validators.service';

const declarationsInternal: any[] = [];
const declarationsExternal = [WithoutSpecialCharactersDirective];
const modulesInternal: any = [];
const modulesExternal: any = [
	CommonModule,
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatSidenavModule,
	MatListModule,
	MatProgressSpinnerModule,
	MatCardModule,
	MatCheckboxModule,
	FlexLayoutModule,
	FormsModule,
	ReactiveFormsModule,
];

@NgModule({
	declarations: [...declarationsInternal, ...declarationsExternal],
	imports: [...modulesInternal],
	exports: [...declarationsExternal, ...modulesExternal],
})
export class SharedModule {
	public static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: [AuthGuard, ValidatorsService],
		};
	}
}
