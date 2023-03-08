import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Producto } from 'src/app/interfaces/producto';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productAlmacen=[
    {
      prodId:1, 
      descripcion:"Hombre Pana",
      img:'./../../assets/images/t1.jpg',
     precio:400,
     
  },
  {
    prodId:2,
    descripcion:"Hombre Sport",
    img:'./../../assets/images/t2.jpg',
     precio:300,
    
  },
  {
    prodId:3,
    descripcion:"Lite Man Sport",
    img:'./../../assets/images/t3.jpg',
     precio:400,
    
  },
  {
    prodId:4,
    descripcion:"Nuca Primary",
    img:'./../../assets/images/t4.jpg',
     precio:400,
     
  }
]

constructor(private cartService:CartService){}
productArray=this.productAlmacen.map(product=>{
 return  {...product,qty:1}
})
addtoCart(product:any){
this.cartService.addCart(product)
}
inc(prod:Producto){
  prod.qty! +=1
  }
  dec(prod:Producto){
    if(prod.qty !=1){
        prod.qty! -=1
  
    }
}
}
