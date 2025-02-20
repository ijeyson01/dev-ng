import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styles: ``
})
export class MaintenanceComponent implements OnInit {

  @ViewChild('carsFormControl') divCarsControl!: ElementRef;
  renderer = inject(Renderer2);

  
  constructor(private readonly frmBuilder: FormBuilder){}

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

  newControl(control: HTMLElement) {
    this.renderer.appendChild(this.divCarsControl ,control);
  }

}

interface CarI {
  marca: string,
  modelo: string,
  anio: number,
  tipo: string
}
