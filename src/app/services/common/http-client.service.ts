import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  private Url(request: RequestParameters) : string {

    return `${request.baseUrl ? request.baseUrl : this.baseUrl}/${request.controller}${request.action ? '/${request.action}' : ""}` ; 
  }

  Get<T>(request: Partial<RequestParameters>, id?: string) :  Observable<T> {
    let url : string = "";

    if(request.fullEndPoint)
      url = request.fullEndPoint;
    else
      url = `${this.Url(request)}${id ? '/${id}' : ''}` //If we use GetById, It added to url

    return this.httpClient.get<T>(url, {headers: request.header});
  }

  Post<T>(request: Partial<RequestParameters>, body: Partial<T> ) : Observable<T> {
    let url : string = "";

    if(request.fullEndPoint)
      url = request.fullEndPoint;
    else
      url = `${this.Url(request)}`;

    
    return this.httpClient.post<T>(url, body, {headers: request.header});
  }

  Put<T>(request: Partial<RequestParameters>, body: Partial<T>) : Observable<T> {
    let url : string = "";

    if(request.fullEndPoint)
      url = request.fullEndPoint;
    else
      url = `${this.Url(request)}`;

    return this.httpClient.put<T>(url, body, {headers : request.header});
  }

  Delete<T>(request: Partial<RequestParameters>, id: string) : Observable<T> {
    let url : string = "";

    if(request.fullEndPoint)
      url = request.fullEndPoint;
    else
      url = `${this.Url(request)}/${id}`;

    return this.httpClient.delete<T>(url, {headers: request.header});

  }
}




export class RequestParameters {
  controller? : string;
  action?: string; // May have action or not

  header?: HttpHeaders; //Request may has header
  baseUrl?: string; //Base Url may has changed

  fullEndPoint?: string; //We can make a request to other endpoints 
}
