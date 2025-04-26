import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ExternalComponent } from '../external/external.component';

@Component({
  selector: 'app-about',
  imports: [ExternalComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  localstValue: string = '';
  localstssrValue: string = '';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('🌐 Loaded on Browser about (Client-side)');
    }

    if (isPlatformServer(this.platformId)) {
      console.log('🖥️ Loaded on Server about (Server-side)');
    }
    console.log('About component initialized!');
    if (typeof window !== 'undefined') {
      localStorage.setItem('testinssr', 'value');
      this.localstValue = localStorage.getItem('test') ?? 'not set';
      this.localstssrValue = localStorage.getItem('testinssr') ?? 'not set';
      console.log(this.localstValue);
    }
  }
}
