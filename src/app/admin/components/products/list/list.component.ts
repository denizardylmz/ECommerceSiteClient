import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../../../services/common/models/product.service";
import {BaseComponent, SpinnerType} from "../../../../base/base.component";
import {NgxSpinnerService} from "ngx-spinner";
import {AlertifyService, MessageType} from "../../../../services/admin/alertify.service";
import {MatTableDataSource} from "@angular/material/table";
import {Listproduct} from "../../../../contracts/listproduct";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent, DialogState} from "../../../../dialogs/delete-dialog/delete-dialog.component";

declare var $ : any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent extends BaseComponent implements OnInit{


  constructor(private productservice: ProductService,
              snipper : NgxSpinnerService,
              private alertify : AlertifyService) {
    super(snipper);
  }

  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updatedDate', 'edit', 'delete'];

  dataSource : MatTableDataSource<any> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  async GetProducts() {
    this.showSpinner(SpinnerType.Default);

    const allProducts: {totalCount: number, products :Listproduct[]} =   await this.productservice.read(this.paginator ? this.paginator.pageIndex : 0,
      this.paginator ? this.paginator.pageSize : 5,
      () => {
      this.hideSpinner(SpinnerType.Default);
      }, () => {
      this.hideSpinner(SpinnerType.Default);
      this.alertify.message("Cannot get products from server", {
      messageType: MessageType.Error
      })
    });

    this.dataSource = new MatTableDataSource<any>(allProducts.products);
    this.paginator.length = allProducts.totalCount;
  }

  pageChanged() {
    this.GetProducts();
  }

  async ngOnInit() {
    this.GetProducts();
  }

}

