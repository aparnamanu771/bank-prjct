import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletconformComponent } from './deletconform.component';

describe('DeletconformComponent', () => {
  let component: DeletconformComponent;
  let fixture: ComponentFixture<DeletconformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletconformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletconformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
