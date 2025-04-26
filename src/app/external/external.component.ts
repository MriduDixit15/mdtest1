import { CommonModule, isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-external',
  imports: [
    CommonModule
  ],
  templateUrl: './external.component.html',
  styleUrl: './external.component.scss'
})
export class ExternalComponent {
  externalHtml: SafeHtml | null = null;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.http
        .get('/external-html', { responseType: 'text' })
        .subscribe((html) => {
          console.log(html);
          if (html)
            this.externalHtml = this.sanitizer.bypassSecurityTrustHtml(html);
        });
    }
  }

  checkButton(){
    console.log('sssssssssssssssssssssssssssssssssssssssssssssssssssss');
  }
}
