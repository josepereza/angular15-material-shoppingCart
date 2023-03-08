import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/interfaces/producto';
import { CartService } from 'src/app/services/cart.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['img', 'qty', 'precio','subtotal','accion'];
 total=0;
  constructor(private cartService:CartService){
  

  }
  ngOnInit(): void {
  
   this.dataSource = new MatTableDataSource(this.cartService.cart);
   this.total = this.cartService.cart.reduce(function (acc: any, val: any) {
    return acc + val.precio * val.qty;
  }, 0);
  }
  delete(prodId:any){
    
this.cartService.deleteItem(prodId)
this.dataSource = new MatTableDataSource(this.cartService.cart);

  }
 
}
