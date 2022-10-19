import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarHomeComponent } from './menu-bar-home.component';

describe('MenuBarHomeComponent', () => {
  let component: MenuBarHomeComponent;
  let fixture: ComponentFixture<MenuBarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
