import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogCarService } from '../services/blog-car.service';
import { BlogCar } from '../models/blogcar';

@Component({
  selector: 'app-blog-car',
  templateUrl: './blog-car.component.html',
  styleUrls: ['./blog-car.component.css']
})
export class BlogCarComponent implements OnInit {
  blogCar$!: Observable<BlogCar>;
  carId!: number;

  constructor(private blogCarService: BlogCarService, private avRoute: ActivatedRoute) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.carId = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
    this.loadBlogCar();
  }

  loadBlogCar() {
    this.blogCar$ = this.blogCarService.getBlogCar(this.carId);
  }
}