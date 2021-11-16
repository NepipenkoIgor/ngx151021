import {
	Component,
	ComponentFactory,
	ComponentFactoryResolver,
	ComponentRef,
	HostListener,
	OnInit,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { IModalData, ModalService } from './modal.service';

@Component({
	selector: 'ngx-classwork-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
	public isOpen: boolean = false;

	@ViewChild('modalContent', { read: ViewContainerRef })
	public modalContent!: ViewContainerRef;

	private componentFactory!: ComponentFactory<any>;

	private componentRef!: ComponentRef<any>;

	public constructor(
		private readonly cfr: ComponentFactoryResolver,
		private readonly modalService: ModalService,
	) {}

	public ngOnInit(): void {
		this.modalService.modalSequence$.subscribe((data: IModalData | null) => {
			if (!data) {
				this.close();
				return;
			}
			this.isOpen = true;
			this.componentFactory = this.cfr.resolveComponentFactory(data.component);
			this.componentRef = this.modalContent.createComponent(this.componentFactory);
			Object.keys(data.context).forEach((key: string) => {
				this.componentRef.instance[key] = data.context[key];
			});
			this.componentRef.changeDetectorRef.detectChanges();
		});
	}

	@HostListener('window:keyup', ['$event.keyCode'])
	private close(code: number = 27) {
		if (code !== 27) {
			return;
		}
		if (this.componentRef) {
			this.componentRef.destroy();
		}
		this.isOpen = false;
	}
}
