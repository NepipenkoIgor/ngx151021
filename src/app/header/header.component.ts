import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	//DoCheck,
	Input,
	NgZone,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

// declare var vk: any;

@Component({
	selector: 'ngx-classwork-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
// DoCheck,
export class HeaderComponent
	implements
		OnInit,
		OnChanges,
		AfterContentInit,
		AfterViewInit,
		AfterContentChecked,
		AfterViewChecked
{
	@Input()
	public pageTitle!: { title: string };

	@Input()
	public drawer!: MatSidenav;

	public constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {
		console.log('constructor', this.pageTitle, this.zone);
		setTimeout(() => {
			this.cdr.detach();
			//this.cdr.mar();
			// this.cdr.reattach();
		}, 5000);
		// vk.getUser((user) => {
		//   this.zone.run(()=>{
		//     console.log(user);
		//     this.user = user;
		//   })
		// });
		// this.zone.runOutsideAngular(()=>{
		//   const map = new Map();
		//   map.
		// })
	}

	public ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnChanges', changes);
	}

	public ngOnInit() {
		console.log('ngOnInit', this.pageTitle);
	}

	// public ngDoCheck() {
	// 	console.log('ngDoCheck');
	// }

	public ngAfterContentInit() {
		console.log('ngAfterContentInit');
	}

	public ngAfterContentChecked() {
		console.log('ngAfterContentChecked');
	}

	public ngAfterViewInit() {
		console.log('ngAfterViewInit');
	}

	public ngAfterViewChecked() {
		console.log('ngAfterViewChecked');
	}

	public onToggle() {
		this.drawer.toggle();
	}
}
