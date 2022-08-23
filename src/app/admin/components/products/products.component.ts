import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import {Createproduct} from "../../../contracts/createproduct";
import {ListComponent} from "./list/list.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(snipper: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(snipper)
   }


  ngOnInit(): void {
  }

  @ViewChild(ListComponent) listComponent : ListComponent;

  createdProduct(createdProduct: Createproduct) {
    this.listComponent.GetProducts();
  }

}
