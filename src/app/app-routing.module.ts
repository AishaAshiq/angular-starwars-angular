import { NgModule } from '@angular/core';
import { CategoryComponent } from "./category/category.component";
import { ItemsCategoryComponent } from "./items-category/items-category.component";
import { IndividualDetailsComponent } from "./individual-details/individual-details.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'category', component: CategoryComponent},
  { path: 'category/:name', component:  ItemsCategoryComponent},
  // { path: 'individualdetails', component:  IndividualDetailsComponent},
  { path: 'category/:name/:detailsname', component:  IndividualDetailsComponent},
  { path: '',  redirectTo: '/category', pathMatch: 'full' }
  // { path: 'second-page', component: SecondPageComponent },
  // { path: 'third-page', component: ThirdPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
