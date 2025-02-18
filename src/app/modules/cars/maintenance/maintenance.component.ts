import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styles: ``
})
export class MaintenanceComponent implements OnInit {
  
  constructor(private readonly frmBuilder: FormBuilder){}

  frmCarRx!: FormGroup;

  ngOnInit(): void {
    this.frmCarRx = this.initForm();
  }

  initForm() : FormGroup {
    return this.frmBuilder.group({
      marca: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      modelo: ['', [Validators.required, Validators.minLength(8), Validators.nullValidator]],
      anio: [2000, [Validators.pattern('[0-9]*$'), Validators.minLength(4), Validators.max(2025) ]]
    });
  }

}
