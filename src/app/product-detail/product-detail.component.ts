// product-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productId: number | undefined;
  product: any;
  loading: boolean = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = +params['id'];
      this.fetchProductDetails();
    });
  }

  private fetchProductDetails(): void {
    this.http
      .get(`https://fakestoreapi.com/products/${this.productId}`)
      .subscribe(
        (data: any) => {
          this.product = data;
          this.loading = false;
        },
        (error) => {
          this.error = 'Error fetching product details from the API';
          this.loading = false;
        }
      );
  }
}
