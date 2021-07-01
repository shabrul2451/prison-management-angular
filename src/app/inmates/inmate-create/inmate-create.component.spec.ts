import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmateCreateComponent } from './inmate-create.component';

describe('InmateCreateComponent', () => {
  let component: InmateCreateComponent;
  let fixture: ComponentFixture<InmateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmateCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InmateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
