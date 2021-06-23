import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCarAddEditComponent } from './blog-car-add-edit.component';

describe('BlogCarAddEditComponent', () => {
  let component: BlogCarAddEditComponent;
  let fixture: ComponentFixture<BlogCarAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCarAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCarAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
