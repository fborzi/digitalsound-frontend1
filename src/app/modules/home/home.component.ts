import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filteredProductsByCategory: Product[] = [];
  

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  //TODO REVISAR ESTO
  getAlmacenamiento(){
    this.productService.productList().subscribe(
      (res) => (this.filteredProductsByCategory = res.filter(product => product.category.id == 1))
    )
    console.log(this.filteredProductsByCategory);
  }

}
