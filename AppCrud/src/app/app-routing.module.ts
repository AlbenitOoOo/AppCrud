import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCarComponent } from './blog-car/blog-car.component';
import { BlogCarsComponent } from './blog-cars/blog-cars.component';
import { BlogCarAddEditComponent } from './blog-car-add-edit/blog-car-add-edit.component';

const routes: Routes = [
  {path: '', component: BlogCarsComponent, pathMatch: 'full'},
  {path: 'blogcar/:id', component: BlogCarComponent},
  {path: 'add', component: BlogCarAddEditComponent},
  {path: 'blogcar/edit/:id', component: BlogCarAddEditComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
