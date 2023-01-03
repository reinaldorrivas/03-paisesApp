import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  public params: HttpParams = new HttpParams().set(
    'fields',
    'name,flags,population,capital,cca2'
  );
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  public buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.httpClient.get<Country[]>(url);
  }

  public buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.httpClient.get<Country[]>(url, {params: this.params});
  }

  public buscarCodigo(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${termino}`;

    return this.httpClient.get<Country[]>(url);
  }

  public buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${termino}`;

    return this.httpClient.get<Country[]>(url, { params: this.params });
  }
}
