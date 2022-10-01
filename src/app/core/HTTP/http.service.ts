import { GetRequestParameters } from './../Models/get-request-parameters';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public getData<R>(
    url: string,
    parameters: GetRequestParameters[]
  ): Observable<R> {
    const finalUrl = `${url}?${this.buildUrlquery(parameters)}`;

    return this.http.get<R>(finalUrl);
  }

  public postData<T, R>(
    url: string,
    queryParameters: GetRequestParameters[],
    bodyParameters: object
  ): Observable<R> {
    const finalUrl = `${url}?${this.buildUrlquery(queryParameters)}`;

    return this.http.post<R>(finalUrl, bodyParameters);
  }

  private buildUrlquery(parameters: GetRequestParameters[]): string {
    return parameters.length > 0
      ? parameters.map((pair) => `${pair.key}=${pair.value}`).join('&')
      : '';
  }
}
