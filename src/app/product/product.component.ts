import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  boughtProducts: number;
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.boughtProducts = 0;
    this.productService.getProducts().then((products) => {
      this.products = products;
    });
  }

  countBoughtProducts() {
    let cnt = 0;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].bought) {
        cnt++;
      }
    }
    return cnt;
  }

  exportCsv() {
    this.productService.getCsv();
  }
}
