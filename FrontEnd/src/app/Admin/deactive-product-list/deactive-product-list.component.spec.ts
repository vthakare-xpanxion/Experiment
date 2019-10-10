import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveProductListComponent } from './deactive-product-list.component';

describe('DeactiveProductListComponent', () => {
  let component: DeactiveProductListComponent;
  let fixture: ComponentFixture<DeactiveProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactiveProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactiveProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
