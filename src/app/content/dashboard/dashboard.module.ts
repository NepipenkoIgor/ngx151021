import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
	declarations: [
		DashboardComponent,
		HeaderComponent,
		SidenavComponent,
		ExchangeRatesComponent,
		ExchangeRatesDirective,
		HiddenDirective,
	],
	imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
