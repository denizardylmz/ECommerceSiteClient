import { Injectable } from '@angular/core';
import {HttpClientService} from "../http-client.service";
import {Createproduct} from "../../../contracts/createproduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  //methods may have interfaces...
  //Used Success for stop spinner...
  create(product: Createproduct, successCallBack? : any) {
    this.httpClientService.Post(
      {controller: "Test"},
      product
    ).subscribe(result => {
      successCallBack();
    });
  }
}
