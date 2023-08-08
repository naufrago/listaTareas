import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponeteTareasComponent } from './componete-tareas.component';

describe('ComponeteTareasComponent', () => {
  let component: ComponeteTareasComponent;
  let fixture: ComponentFixture<ComponeteTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponeteTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponeteTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
