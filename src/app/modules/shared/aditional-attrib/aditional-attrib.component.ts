import { Component, EventEmitter, inject, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-aditional-attrib',
  templateUrl: './aditional-attrib.component.html',
  styles: ``
})
export class AditionalAttribComponent {

  renderer  = inject(Renderer2);

  typeControl: string = '';
  labelControl: string = '';
  arrayValidationsControl: any[] = [];

  newCtrlEvent: any;

  @Output() newControlEvent = new EventEmitter<HTMLElement>();

  createElement() {
    let control: HTMLElement = this.renderer.createElement('input');
    this.renderer.setAttribute(control, 'id', `${this.labelControl.toLowerCase()}id`);
    this.renderer.setAttribute(control, 'name', `${this.labelControl.toLowerCase()}name`);
    this.renderer.setAttribute(control, 'formControlName', `${this.labelControl.toLowerCase()}`);
    this.newControlEvent.emit(control);
  }
}
