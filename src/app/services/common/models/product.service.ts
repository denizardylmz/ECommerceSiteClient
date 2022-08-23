import { Injectable } from '@angular/core';
import {HttpClientService} from "../http-client.service";
import {Createproduct} from "../../../contracts/createproduct";
import {firstValueFrom, lastValueFrom, Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Listproduct} from "../../../contracts/listproduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  //methods may have interfaces...
  //Used Success for stop spinner...
  create(product: Createproduct, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
    this.httpClientService.post({
      controller: "Test"
    }, product)
      .subscribe(result => {
        successCallBack();
      }, (errorResponse: HttpErrorResponse) => {
        let message = "";
        const _errors: Array<{key: string, value : Array<string>}> = errorResponse.error;

        _errors.forEach((error, index) => {
          error.value.forEach((value) => {
              message += `${value}<br>`;
            });
        });
        errorCallBack(message);
      });
  }


  async read(page: number = 0, size: number = 5,
             successCallBack?: () => void,
             errorCallBack?: (errorMessage: string) => void)
    : Promise<{totalCount: number, products :Listproduct[]}> {

    const result : Promise<{totalCount: number, products :Listproduct[]}> =
      firstValueFrom<{totalCount: number, products :Listproduct[]}>
          (this.httpClientService.get< {totalCount: number, products:Listproduct[]} >({
                controller: "Test",
                queryString: `Page=${page}&Size=${size}`
          }));
    result.then(d => successCallBack())
      .catch( (errorResponse : HttpErrorResponse) => errorCallBack(errorResponse.message));
    return await result;
  }





  async delete(id: string) {
    const obs: Observable<any> = this.httpClientService.delete<any>({controller: "Test"}, id);
    await firstValueFrom(obs);
  }
}
