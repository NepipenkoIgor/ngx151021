import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

// declare var vk: any;

@Component({
	selector: 'ngx-classwork-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Input()
	public pageTitle!: { title: string };

	@Input()
	public drawer!: MatSidenav;

	public onToggle() {
		this.drawer.toggle();
	}
}
