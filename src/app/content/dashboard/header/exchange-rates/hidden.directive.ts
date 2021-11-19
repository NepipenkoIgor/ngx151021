import { Directive, HostBinding } from '@angular/core';

@Directive({
	selector: '[ngxClassworkHidden]',
	exportAs: 'hc,hiddenControl',
})
export class HiddenDirective {
	@HostBinding('style.visibility')
	public visibility = 'hidden';

	public show() {
		this.visibility = 'visible';
	}

	public hide() {
		this.visibility = 'hidden';
	}
}
