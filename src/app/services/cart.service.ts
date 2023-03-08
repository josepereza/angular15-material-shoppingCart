import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart:any[]=[]
  constructor() { }


  //addCart(product:any){
    //this.cart.push(product)


  //}
  numItem(){
    return this.cart.length;
  }


  itemsCart:any[] = [];

  addCart(product:any){
  
   if (this.cart.length==null){
    this.cart.push(product)
   }
    else{
      var id = product.prodId;
      let index:number = -1;
   
for
(let i=0; i<this.cart.length; 
i++){
if(id === 
parseInt(this.cart[i].prodId))
{
        this.cart[i].qty = 
product.qty
          index = i;
          break;
        }
      }
      if(index == -1){
this.cart.push(product);
       
      }
   
    }
   
  }
deleteItem(id:number){
  const indice = this.cart.findIndex((elemento) =>
 elemento.prodId==id
  );

  this.cart.splice(indice,1)
  console.log(this.cart)
}

 
}
