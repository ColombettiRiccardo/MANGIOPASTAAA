import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path:'product/:id', component: ProductComponent},
  { path: '', redirectTo: "/search",pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
