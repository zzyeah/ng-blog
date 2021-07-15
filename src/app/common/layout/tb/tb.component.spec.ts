import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbComponent } from './tb.component';

describe('TbComponent', () => {
  let component: TbComponent;
  let fixture: ComponentFixture<TbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
