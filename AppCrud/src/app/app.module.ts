import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogCarsComponent } from './blog-cars/blog-cars.component';
import { BlogCarComponent } from './blog-car/blog-car.component';
import { BlogCarAddEditComponent } from './blog-car-add-edit/blog-car-add-edit.component';
import { BlogCarService } from './services/blog-car.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogCarsComponent,
    BlogCarComponent,
    BlogCarAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    BlogCarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
