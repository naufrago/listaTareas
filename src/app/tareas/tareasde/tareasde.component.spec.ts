import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasdeComponent } from './tareasde.component';

describe('TareasdeComponent', () => {
  let component: TareasdeComponent;
  let fixture: ComponentFixture<TareasdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
