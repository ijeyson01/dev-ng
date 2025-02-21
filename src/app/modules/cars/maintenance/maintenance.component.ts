import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlDataI } from '../../../interfaces/control-data.interface';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styles: ``
})
export class MaintenanceComponent implements OnInit {

  renderer = inject(Renderer2);

  constructor(private readonly frmBuilder: FormBuilder, private divCarsControl: ElementRef){}

  frmCarRx!: FormGroup;

  ngOnInit(): void {
    this.frmCarRx = this.initForm();
  }

  initForm() : FormGroup {
    return this.frmBuilder.group({
      marca: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)] ],
      modelo: ['', [Validators.pattern('[A-Z]*$') ,Validators.required, Validators.minLength(8)] ],
      anio: [2000, [Validators.pattern('[0-9]*$'), Validators.minLength(4), Validators.max(2025) ]],
      tipo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]]
    });
  }

  sendInfo(){
    if(this.frmCarRx.valid) {
      let datosAuto: CarI = this.frmCarRx.value;
      alert(JSON.stringify(datosAuto));
    } else {
      alert('Los datos ingresados no son validos');
    }
    // alert(JSON.stringify(this.frmCarRx.value.marca));
  }

  newControl(control: ControlDataI) {
    const divCarsForm = this.divCarsControl.nativeElement.querySelector('#carsFormControl');
    this.renderer.appendChild(divCarsForm, control.control);
    let formControlNameValue: string = control.control.getAttribute('formControlName')!;
    let validationsControlValues: Validators[] = [];
    control.validation.forEach( validation => {
      switch (validation.validation) {
        case Validators.required.name: {
          if(validation.status) {
            validationsControlValues.push(Validators.required);
          }
          break;
        }
        case Validators.minLength.name: {
          if(validation.status) {
            validationsControlValues.push(Validators.minLength(Number(validation.valueValidation)));
          }
          break;
        }

        case Validators.maxLength.name: {
          if(validation.status) {
            validationsControlValues.push(Validators.maxLength(Number(validation.valueValidation)));
          }
          break;
        }
        case Validators.pattern.name: {
          if(validation.status) {
            validationsControlValues.push(Validators.pattern(validation.valueValidation!));
          }
          break;
        }
      }
    })
    this.frmCarRx.setControl(formControlNameValue, ['', validationsControlValues]);
  }

}

interface CarI {
  marca: string,
  modelo: string,
  anio: number,
  tipo: string
}
