import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { NavigationItemComponent } from './navigation-item.component';
import { NAVIGATION_ITEM_LIST } from '@core/ui/components/layout/constants/navigation-item-list.config';

describe('NavigationItemComponent', () => {
  let component: NavigationItemComponent;
  let fixture: ComponentFixture<NavigationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('item', NAVIGATION_ITEM_LIST[0]);
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(component).toBeTruthy();
  });
});
