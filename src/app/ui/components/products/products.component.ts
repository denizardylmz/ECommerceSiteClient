import { Component, OnInit } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrOptions, ToastrPosition } from 'src/app/services/ui/custom-toastr.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private CustomToastr : CustomToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.CustomToastr.message("Hello!", "Hi", {messageType: ToastrMessageType.Error, position: ToastrPosition.topright});
  }

  c() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

}
