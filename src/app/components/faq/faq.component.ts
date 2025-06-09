import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger as animationTrigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  animations: [
    animationTrigger('slideInOut', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: '0', opacity: 0 }))
      ])
    ])
  ]
})
export class FaqComponent {
  openFaq: number | null = null;

  toggleFaq(index: number) {
    this.openFaq = this.openFaq === index ? null : index;
  }
}
function trigger(arg0: string, arg1: any[]): any {
  throw new Error('Function not implemented.');
}

