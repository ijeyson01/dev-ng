import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ControlDataI } from '../../../interfaces/control-data.interface';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styles: ``
})
export class MaintenanceComponent implements OnInit {

  renderer = inject(Renderer2);

  constructor(private readonly frmBuilder: FormBuilder, private divCarsControl: ElementRef, private readonly change: ChangeDetectorRef){}

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
    
    let formControlNameValue: string = control.formControlNameValue;
    // AGREGAR UN OBJETO DE TIPO FORMCONTROL AL OBJETO DE FORMULARIO REACTIVO CON NUESTRO
    // CONTROL:
    this.frmCarRx.addControl(formControlNameValue, new FormControl());
    control.validation.forEach( validation => {

      // VALIDAR LA EXISTENCIA DE LAS VALIDACIONES DEFINIDAS PARA EL CONTROL:
      switch (validation.validation) {
        case Validators.required.name: {
          if(validation.status) {
            // SI LA VALIDACION SE APLICÓ, SE AGREGA AL CONTROL PREVIAMENTE AGREGADO
            // DE LA SIGUIENTE MANERA
            this.frmCarRx.controls[formControlNameValue].addValidators(Validators.required);
          }
          break;
        }
        case Validators.minLength.name: {
          if(validation.status) {
            this.frmCarRx.controls[formControlNameValue].addValidators(Validators.minLength(Number(validation.valueValidation)));
          }
          break;
        }

        case Validators.maxLength.name: {
          if(validation.status) {
            this.frmCarRx.controls[formControlNameValue].addValidators(Validators.maxLength(Number(validation.valueValidation)));
          }
          break;
        }
        case Validators.pattern.name: {
          if(validation.status) {
            this.frmCarRx.controls[formControlNameValue].addValidators(Validators.pattern(validation.valueValidation!));
          }
          break;
        }
      }
    });
    const divCarsForm = this.divCarsControl.nativeElement.querySelector('#carsFormControl');
    this.renderer.appendChild(divCarsForm, control.control);
    this.change.detectChanges();
  }
}

interface CarI {
  marca: string,
  modelo: string,
  anio: number,
  tipo: string
}
