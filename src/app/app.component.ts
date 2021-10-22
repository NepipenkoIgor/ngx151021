import { Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public title = 'NGX 151021';

	private salary = 3000;

	private bonuses = 1.2;

	public user: any = {
		name: 'Ihor',
	};

	@HostListener('window:resize', ['$event'])
	public resize(e: any) {
		console.log(e);
	}

	public constructor(private readonly domSanitizer: DomSanitizer) {}

	public imgWidth = 50;

	public textSpan = this.domSanitizer.bypassSecurityTrustHtml(
		'<span style="color: red">Angular is awesome</span>',
	);

	public imgSrc =
		'https://justup.com.ua/wp-content/themes/justup/img/logos/12.png.pagespeed.ce.xtC90CD6TC.png';

	public getSalary() {
		return Math.round(this.bonuses * this.salary);
	}

	public getValue(v: string, ev: any): void {
		console.log(v);
		console.log(ev);
	}
}
