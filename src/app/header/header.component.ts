import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'ngx-classwork-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@Input()
	public pageTitle!: string;

	@Output()
	public toggle = new EventEmitter<{ isOpen: boolean; timestamp: number }>();

	public isOpen = false;

	public onToggle() {
		this.isOpen = !this.isOpen;
		this.toggle.emit({ isOpen: this.isOpen, timestamp: Date.now() });
	}
}
