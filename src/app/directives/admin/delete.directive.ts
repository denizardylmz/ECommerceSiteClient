import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';
import {HttpClientService} from "../../services/common/http-client.service";
import {ProductService} from "../../services/common/models/product.service";
import {NgxSpinnerService} from "ngx-spinner";
import {SpinnerType} from "../../base/base.component";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent, DialogState} from "../../dialogs/delete-dialog/delete-dialog.component";

declare var $ : any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element : ElementRef,
              private _renderer : Renderer2,
              private productService : ProductService,
              private spinner : NgxSpinnerService,
              public dialog: MatDialog
  ) {
    const  img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../assets/Delete.png");
    img.setAttribute("style", "cursor: pointer;");
    img.width = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img);
  }

  @Input() id : string;
  @Output() callback : EventEmitter<any> = new EventEmitter();

 @HostListener("click")
  onclick(){
   this.openDialog(() => {
     this.spinner.show(SpinnerType.Default);
     const td : HTMLTableCellElement = this.element.nativeElement;
     this.productService.delete(this.id);
     $(td.parentElement).fadeOut(1000, () => {
       this.callback.emit();
     });
   })
  }


  openDialog(callBack : any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: DialogState.Yes
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result == DialogState.Yes)
        callBack();
    });
  }

}
