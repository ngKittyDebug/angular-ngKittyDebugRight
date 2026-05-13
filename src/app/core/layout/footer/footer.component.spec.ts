import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render GitHub repository link', () => {
    const element: HTMLElement = fixture.nativeElement;
    const link = element.querySelector('a[href*="github.com/ngKittyDebug"]');

    expect(link).toBeTruthy();
  });
  it('should render all three author links', () => {
    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll('.authors a');

    expect(links.length).toBe(3);
  });
});
