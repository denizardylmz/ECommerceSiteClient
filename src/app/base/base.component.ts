import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { timeout } from 'rxjs';

export class BaseComponent {

  constructor(private spinner : NgxSpinnerService) { }

  showSpinner(spinnerTypeName: SpinnerType ) {
    this.spinner.show(spinnerTypeName);

    setTimeout(() => this.hideSpinner(spinnerTypeName), 3000);
  }

  hideSpinner(spinnerTypeName : SpinnerType) {
    this.spinner.hide(spinnerTypeName);
  }
}

export enum SpinnerType{
  Default = "Default",
  Pacman = "Pacman"
}
