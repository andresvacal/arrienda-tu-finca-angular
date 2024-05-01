import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionDetailComponent } from './reservacion-detail.component';

describe('ReservacionDetailComponent', () => {
  let component: ReservacionDetailComponent;
  let fixture: ComponentFixture<ReservacionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservacionDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
