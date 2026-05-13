import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { navigationItemListConfig } from '@core/ui/components/layout/constants/navigation-item-list.config';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('navigationItemList', navigationItemListConfig);
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(component).toBeTruthy();
  });
});
