import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmSessionCreateComponent } from './bm-session-create.component';

describe('BmSessionCreateComponent', () => {
  let component: BmSessionCreateComponent;
  let fixture: ComponentFixture<BmSessionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmSessionCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmSessionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
