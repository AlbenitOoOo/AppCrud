import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCarComponent } from './blog-car.component';

describe('BlogCarComponent', () => {
  let component: BlogCarComponent;
  let fixture: ComponentFixture<BlogCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
