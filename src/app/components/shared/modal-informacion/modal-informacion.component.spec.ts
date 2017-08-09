import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformacionComponent } from './modal-informacion.component';

describe('ModalInformacionComponent', () => {
  let component: ModalInformacionComponent;
  let fixture: ComponentFixture<ModalInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
