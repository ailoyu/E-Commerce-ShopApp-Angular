import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../model/category";

@Injectable({
    providedIn: 'root'
})
export class CategoryService{
    private apiGetCategoies = `${environment.apiBaseUrl}/categories`;

    constructor(private http: HttpClient){}
    
    getCategories(page: number, limit: number): Observable<Category[]>{
        debugger
        const params = new HttpParams()
        .set('page', page.toString())
        .set('limit', limit.toString());
        return this.http.get<Category[]>(this.apiGetCategoies, {params});
    }
}