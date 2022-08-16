import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../services/common/models/product.service";
import {Createproduct} from "../../../../contracts/createproduct";
import {BaseComponent, SpinnerType} from "../../../../base/base.component";
import {NgxSpinnerService} from "ngx-spinner";
import {AlertifyService, MessageType, Position} from "../../../../services/admin/alertify.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(private productService: ProductService, spinner: NgxSpinnerService, private alertify: AlertifyService) {
    super(spinner);
  }

  ngOnInit(): void {
  }

  create(Name : HTMLInputElement, Stock: HTMLInputElement, Price: HTMLInputElement) {
    this.showSpinner(SpinnerType.Default);
    const create_product: Createproduct = new Createproduct();
    create_product.name = Name.value;
    create_product.stock = parseInt(Stock.value);
    create_product.price = parseInt(Price.value);

    this.productService.create(create_product, () =>
    {
      this.hideSpinner(SpinnerType.Default);
      this.alertify.message("Product added, Successfully", {messageType: MessageType.Success});
    });
  }

}
