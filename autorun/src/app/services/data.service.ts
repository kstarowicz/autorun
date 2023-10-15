import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Przykładowe API

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/items`);
  }

  getItemDetails(itemId: string | number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items/${itemId}`);
  }
}