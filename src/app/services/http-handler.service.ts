import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class HttpHandlerService {
  apiUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) {}

  getPosts(): Promise<any> {
    return this.httpClient
      .get(this.apiUrl)
      .toPromise()
      .then((response) => response);
  }
}
