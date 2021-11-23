import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ProductsService } from './products.service';
import { SharedModule } from '../../../../shared/shared.module';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { OneProductComponent } from './one-product/one-product.component';
import { OneProductResolver } from './one-product/one-product.resolver';

@NgModule({
	declarations: [
		ProductsComponent,
		SearchComponent,
		ProductCardComponent,
		ProductsFilterPipe,
		OneProductComponent,
	],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProductsComponent,
			},
			{
				path: ':id',
				component: OneProductComponent,
				resolve: {
					myProduct: OneProductResolver,
				},
			},
		]),
	],
	providers: [ProductsService, OneProductResolver],
})
export class ProductsModule {}
