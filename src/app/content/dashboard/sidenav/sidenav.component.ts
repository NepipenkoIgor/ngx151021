import {
	Component,
	ContentChild,
	EventEmitter,
	OnInit,
	Output,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ProductsService } from '../content/products/products.service';
import { logOut } from '../../../store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store';

@Component({
	selector: 'ngx-classwork-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
	providers: [ProductsService],
})
export class SidenavComponent implements OnInit {
	@ViewChild('content', { static: true, read: ViewContainerRef })
	public content!: ViewContainerRef;

	@ViewChild('drawer', { static: true })
	public drawer!: MatSidenav;

	@ContentChild('contentForProjection', { static: true })
	public tpl!: TemplateRef<any>;

	@Output()
	public setSideNav = new EventEmitter(true);

	public constructor(private readonly store: Store<IAppState>) {}

	public ngOnInit(): void {
		this.content.createEmbeddedView(this.tpl);
		this.setSideNav.emit(this.drawer);
	}

	public logOut() {
		this.store.dispatch(logOut());
	}
}
