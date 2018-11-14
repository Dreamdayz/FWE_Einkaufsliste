import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  mode: 'new' | 'edit' | 'edit' = 'edit';
  recipes: any[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('productId');
      if (productId === 'new') {
        this.mode = 'new';
        this.product = new Product();
      } else {
        this.mode = 'edit';
        this.productService.getProductById(productId).then((product) => {
          this.product = product;
          this.recipeSuggestions();
        });
      }
    });
  }

  onSaveClicked() {
    try {
      this.productService.createProduct(this.product);
      this.router.navigate(['/product']);
    } catch (error) {
      console.log(error);
    }
  }

  onEditClicked() {
    try {
      this.productService.updateProduct(this.product);
      this.router.navigate(['/product']);
    } catch (error) {
      console.log(error);
    }
  }

  onBackClicked() {
    this.router.navigate(['/product']);
  }

  onDeleteClicked() {
    try {
      this.productService.deleteProduct(this.product);
      this.router.navigate(['/product']);
    } catch (error) {
      console.log(error);
    }
  }

  recipeSuggestions() {
    try {
      this.productService.getRecipes(this.product).then((getrecipes) => {
        this.recipes = getrecipes;
        for (const recipe of this.recipes) {
          console.log(recipe.label);
        }
      });

    } catch (error) {
      console.log(error);
    }
  }

}
