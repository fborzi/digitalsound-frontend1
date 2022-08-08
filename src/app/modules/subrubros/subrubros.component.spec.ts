import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubrubrosComponent } from './subrubros.component';

describe('SubrubrosComponent', () => {
  let component: SubrubrosComponent;
  let fixture: ComponentFixture<SubrubrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubrubrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubrubrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
