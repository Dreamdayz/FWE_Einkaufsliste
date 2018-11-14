import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../models/product';
import {ResponseContentType} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  baseUrl = 'http://localhost:3000/product';

  async getProducts() {
    const result = await this.httpClient.get<any>(this.baseUrl).toPromise();
    return result.data;
  }

  async getProductById(productId: string) {
    const result = await this.httpClient.get<any>(this.baseUrl + '/' + productId).toPromise();
    return result.data;
  }

  async createProduct(product: Product) {
    const result = await this.httpClient.post<any>(this.baseUrl, product).toPromise();
    return result.data;
  }

  async updateProduct(product: Product) {
    const result = await this.httpClient.patch<any>(this.baseUrl + '/' + product._id, product).toPromise();
    return result.data;
  }

  async deleteProduct(product: Product) {
    const result = await this.httpClient.delete<any>(this.baseUrl + '/' + product._id).toPromise();
    return result;
  }

  async getCsv() {
    window.open(this.baseUrl + '/download/csv');
  }

  async getRecipes(product: Product) {
    console.log('http://localhost:3000/recipe?name=' + product.name);
    const result = await this.httpClient.get<any>('http://localhost:3000/recipe?name=' + product.name).toPromise();
    console.log(result.data);
    return result.data;
  }

}
