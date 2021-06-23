import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCarsComponent } from './blog-cars.component';

describe('BlogCarsComponent', () => {
  let component: BlogCarsComponent;
  let fixture: ComponentFixture<BlogCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
