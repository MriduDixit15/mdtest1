import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('🌐 Loaded on Browser home (Client-side)');
    }

    if (isPlatformServer(this.platformId)) {
      console.log('🖥️ Loaded on Server home (Server-side)');
    }

    console.log('Home component initialized!');
    localStorage.setItem('test', 'value');
  }

}
