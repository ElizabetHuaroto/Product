import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products:any=[];
ngOnInit(){
  this.ProductService.get().subscribe(response => this.products=response)
  }
  constructor(private ProductService:ProductService){

  }
}
