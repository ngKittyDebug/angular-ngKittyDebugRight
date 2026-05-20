import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { NAVIGATION_ITEM_LIST } from '@core/ui/components/layout/constants/navigation-item-list.config';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent, TranslocoTestingMock],
      providers: [provideRouter([{ path: '', component: SidebarComponent }])],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('navigationItemList', NAVIGATION_ITEM_LIST);
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(component).toBeTruthy();
  });
});
