import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry , catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BlogCar } from '../models/blogcar';
import { utf8Encode } from '@angular/compiler/src/util';
import { ninvoke } from 'q';
import { TouchSequence } from 'selenium-webdriver';
@Injectable({
  providedIn: 'root'
})
export class BlogCarService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
      this.myAppUrl = environment.appUrl;
      this.myApiUrl = 'api/BlogCars/';
  }

getBlogCars(carId: number):Observable<BlogCar> {
  return this.http.get<BlogCar>(this.myAppUrl + this.myApiUrl + carId)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
}

getBlogCar(carId: number): Observable<BlogCar> {
  return this.http.get<BlogCar>(this.myAppUrl + this.myApiUrl + carId)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
}

saveBlogCar(blogCar:any):Observable<BlogCar> {
  return this.http.post<BlogCar>(this.myAppUrl + this.myApiUrl, JSON.stringify(blogCar), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
}

  updateBlogCar(carId:number, blogCar:any): Observable<BlogCar> {
    return this.http.put<BlogCar>(this.myAppUrl + this.myApiUrl + carId, JSON.stringify(blogCar),this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  deleteBlogCar(carId: number): Observable<BlogCar> {
    return this.http.delete<BlogCar>(this.myAppUrl + this.myApiUrl + carId)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      
      errorMessage = error.error.message;
    } else {
      
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
  