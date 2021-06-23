import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogCarService } from '../services/blog-car.service';
import { BlogCar } from '../models/blogcar';
@Component({
  selector: 'app-blog-cars',
  templateUrl: './blog-cars.component.html',
  styleUrls: ['./blog-cars.component.css']
})
export class BlogCarsComponent implements OnInit {
  blogCars$: Observable<BlogCar[]>;

  constructor(private blogCarService: BlogCarService) {
  }

  ngOnInit() {
    this.loadBlogCars();
  }

  loadBlogCars() {
    this.blogCars$ = this.blogCarService.getBlogCars();
  }

  delete(carId:any) {
    const ans = confirm('Do you want to delete blog car with id: ' + carId);
    if(ans){
      this.blogCarService.deleteBlogCar(carId).subscribe((data) => {
        this.loadBlogCars();
      });
    }
  
  }


}
