import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newcountry',
  templateUrl: './newcountry.component.html',
  styles: ``
})
export class NewcountryComponent implements OnInit {

  frmBuilder = inject(FormBuilder);

  frmCountryRx!: FormGroup;

  ngOnInit(): void {
    this.frmCountryRx = this.formInit();
  }

  formInit(): FormGroup {
    return this.frmBuilder.group({
      name: ['', [Validators.required]],
      acronym: ['', [Validators.required, Validators.maxLength(5)]],
      countryCode: ['', [Validators.required, Validators.maxLength(5)]],
      continent: ['', [Validators.required]]
    });
  }
}
