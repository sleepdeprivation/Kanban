import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcolumnComponent } from './cardcolumn.component';

describe('CardcolumnComponent', () => {
  let component: CardcolumnComponent;
  let fixture: ComponentFixture<CardcolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardcolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
