import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})


//Customized class for UI notifications
export class CustomToastrService {

  constructor(private toastr : ToastrService) { }

  message(message: string, title: string, toastrOptions: Partial<ToastrOptions>) {
    this.toastr[toastrOptions.messageType](message, title,{positionClass: toastrOptions.position} ); 
  }

}


export class ToastrOptions{
  messageType: ToastrMessageType;
  position: ToastrPosition;
}

export enum ToastrMessageType{
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}

export enum ToastrPosition{
  topleft = "toast-top-left",
  bottomleft = "toast-bottom-left",
  topright = "toast-top-right"
}