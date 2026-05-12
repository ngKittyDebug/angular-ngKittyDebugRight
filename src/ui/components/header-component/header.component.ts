import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  protected readonly title = signal('Cult Of The Holy Deploy');
  protected readonly subtitle = signal('>> "Machine Spirit is unstable"<<');
}
