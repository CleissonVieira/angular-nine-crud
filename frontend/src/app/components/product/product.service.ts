import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.baseUrl}/products`, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    )
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    )
  }

  readById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.baseUrl}/products/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    )
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.baseUrl}/products/${product.id}`, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    )
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${environment.baseUrl}/products/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    )
  }

  errorHandle(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return e
  }
}
