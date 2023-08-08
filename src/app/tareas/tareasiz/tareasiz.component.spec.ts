import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasizComponent } from './tareasiz.component';

describe('TareasizComponent', () => {
  let component: TareasizComponent;
  let fixture: ComponentFixture<TareasizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
