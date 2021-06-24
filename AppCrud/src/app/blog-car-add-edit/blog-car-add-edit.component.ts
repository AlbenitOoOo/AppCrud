import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import { BlogCarService } from '../services/blog-car.service';
import { BlogCar } from '../models/blogcar';

@Component({
  selector: 'app-blog-car-add-edit',
  templateUrl: './blog-car-add-edit.component.html',
  styleUrls: ['./blog-car-add-edit.component.css']
})
export class BlogCarAddEditComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formTitle: string;
  formBody: string;
  carId!: number;
  errorMessage: any;
  existingBlogCar!: BlogCar;

  constructor(private blogCarService: BlogCarService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.formTitle = 'title';
    this.formBody = 'body';
    if (this.avRoute.snapshot.params[idParam]) {
      this.carId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        carId: 0,
        title: ['', [Validators.required]],
        body: ['', [Validators.required]],
      }
    )
  }

  ngOnInit() {

    if (this.carId > 0) {
      this.actionType = 'Edit';
      this.blogCarService.getBlogCar(this.carId)
        .subscribe(data => (
          this.existingBlogCar = data,
          this.form.controls[this.formTitle].setValue(data.title),
          this.form.controls[this.formBody].setValue(data.body)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }
    
    if (this.actionType === 'Add') {
      let blogCar: BlogCar = {
        dt: new Date(),
        creator: 'Michał',
        title: this.form.get(this.formTitle).value,
        body: this.form.get(this.formBody).value
      };

      this.blogCarService.saveBlogCar(blogCar)
        .subscribe((data) => {
          this.router.navigate(['/blogcar', data.carId]);
        });
    }

    if (this.actionType === 'Edit') {
      let blogCar: BlogCar = {
        carId: this.existingBlogCar.carId,
        dt: this.existingBlogCar.dt,
        creator: this.existingBlogCar.creator,
        title: this.form.get(this.formTitle).value,
        body: this.form.get(this.formBody).value
      };
      this.blogCarService.updateBlogCar(blogCar.carId!, blogCar)
        .subscribe((data) => {
          this.router.navigate([this.router.url]);
        });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  get title() { return this.form.get(this.formTitle); }
  get body() { return this.form.get(this.formBody); }
}