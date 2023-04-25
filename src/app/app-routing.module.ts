import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full' 
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'cart', component:CartComponent
  },
   {
    path:'formulario', component:FormularioComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, // <- Indicar que se use el hash
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
