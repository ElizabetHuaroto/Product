import { Component } from '@angular/core';
import Product from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent {
constructor(private productService: ProductService){

}
productInput: Product={
  id:0,
  nombre: '',
  apellido: '',
  dni: 0
};
registrar(){
  this.productService.post(this.productInput).subscribe(response=>console.log(response));
}
}
