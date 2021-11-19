import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ProductsService } from './products.service';
import { SharedModule } from '../../../../shared/shared.module';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ProductsComponent, SearchComponent, ProductCardComponent, ProductsFilterPipe],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProductsComponent,
			},
		]),
	],
	providers: [ProductsService],
})
export class ProductsModule {}
