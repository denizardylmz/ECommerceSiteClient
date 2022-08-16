import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }


  //Customized class for Alertfy notifications to Admin side
  message(message: string, options : Partial<AlertifyOptions>) {
    alertify.set('notifier','delay', options.delay);
    alertify.set('notifier','position', options.position);
    alertify[options.messageType](message);
  }


  dismissAll(){
    alertify.dismissAll()
  }
}

//Options class
export class AlertifyOptions {
  messageType : MessageType = MessageType.Message;
  position : Position = Position.BottomLeft;
  delay : number = 5;
}


export enum MessageType {
Error = "error",
Message = "message",
Notify = "notify",
Success = "success",
Warning = "warning"
}

export enum Position {
  TopRight = "top-rigt",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "vottom-center",
  BottomLeft = "bottom-left"
}
