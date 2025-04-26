import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  localstValue: string = '';
  localstssrValue: string = '';
  constructor() {}

  ngOnInit() {
    console.log('About component initialized!');
    localStorage.setItem('testinssr', 'value');
    this.localstValue = localStorage.getItem('test') ?? 'not set';
    this.localstssrValue = localStorage.getItem('testinssr') ?? 'not set';
    console.log(this.localstValue);
  }
}
