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
import { ProductsService } from '../products.service';

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

	public ngOnInit(): void {
		this.content.createEmbeddedView(this.tpl);
		this.setSideNav.emit(this.drawer);
	}
}
