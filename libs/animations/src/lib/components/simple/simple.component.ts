import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { state, style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'animation-examples-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
    ])
  ]
})
export class SimpleComponent implements OnInit {
  state: any = 'highlighted';

  constructor() { }

  ngOnInit() {
  }

  animate() {
    this.state === 'highlighted' ? this.state = 'normal' : this.state = 'highlighted'
  }
}
