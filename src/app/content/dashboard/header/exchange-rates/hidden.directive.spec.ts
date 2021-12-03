import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiddenDirective } from './hidden.directive';
import { By } from '@angular/platform-browser';

@Component({
	selector: 'ngx-classwork-test-component',
	template: `
		<div ngxClassworkHidden #c="hiddenControl"></div>
		<span class="hide" (click)="c.hide(); hide(2)"></span>
		<span class="show" (click)="c.show()"></span>
	`,
})
class TestComponent {
	public hide(index: number) {
		return index;
	}
}

describe('[Header]: hidden directive', () => {
	let fixture: ComponentFixture<TestComponent>;
	let component: TestComponent;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestComponent, HiddenDirective],
		});
		fixture = TestBed.createComponent(TestComponent);
		component = fixture.componentInstance;
		spyOn(component, 'hide').and.callThrough();
		fixture.detectChanges();
	});

	it('should hide el', () => {
		const el: DebugElement = fixture.debugElement.query(By.css('[ngxClassworkHidden]'));
		const hideControl: DebugElement = fixture.debugElement.query(By.css('.hide'));
		hideControl.triggerEventHandler('click', {});
		fixture.detectChanges();
		expect(el.styles['visibility']).toEqual('hidden');
		expect(component.hide).toHaveBeenCalledOnceWith(2);
	});
});
