import { NgModule } from '@angular/core';
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
import { AltPrefixPipe } from './alt-prefix/alt-prefix.pipe';

const declarationsInternal: any[] = [];
const declarationsExternal = [AltPrefixPipe];
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
];

@NgModule({
	declarations: [...declarationsInternal, ...declarationsExternal],
	imports: [...modulesInternal],
	exports: [...declarationsExternal, ...modulesExternal],
})
export class SharedModule {}
