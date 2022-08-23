import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService } from "ngx-spinner";
import {ProductService} from "../../../services/common/models/product.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends BaseComponent implements OnInit {

  constructor(readonly productService: ProductService,spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.Pacman);
  }

  c() {
    this.productService.read();
  }

}
