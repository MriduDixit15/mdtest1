import {
  CommonModule,
  isPlatformBrowser,
  isPlatformServer,
} from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ExternalComponent } from '../external/external.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-about',
  imports: [ExternalComponent, CommonModule, HttpClientModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  localstValue: string = '';
  apiresp: any;
  localstssrValue: string = '';
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private http: HttpClient,) {}

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

    this.http
      .get('https://prod.api.sbazar.app/product/search?query=""').subscribe((test: any) => {
        console.log(test);
        this.apiresp = test;
      });
  }
}
