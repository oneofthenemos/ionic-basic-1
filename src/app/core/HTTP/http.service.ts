import { GetRequestParameters } from './../Models/get-request-parameters';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getData<T>(
    url: string,
    parameters: GetRequestParameters[]
  ): Promise<T> {
    const finalUrl = `${url}?${this.buildUrlquery(parameters)}`;

    return this.http.get<T>(finalUrl).toPromise();
  }

  public postData<T>(
    url: string,
    queryParameters: GetRequestParameters[],
    bodyParameters: object
  ) {
    const finalUrl = `${url}?${this.buildUrlquery(queryParameters)}`;

    return this.http.post<T>(finalUrl, bodyParameters).toPromise();
  }

  private buildUrlquery(parameters: GetRequestParameters[]): string {
    return parameters.length > 0
      ? parameters.map((pair) => `${pair.key}=${pair.value}`).join('&')
      : '';
  }
}
