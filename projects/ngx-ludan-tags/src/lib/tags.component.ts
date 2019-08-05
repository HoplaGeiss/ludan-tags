import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ludan-tags',
  styleUrls: ['./tags.component.scss'],
  template: `
    <div class="wrapper">
      <div *ngFor="let item of items" class="item">
        <div class="label">{{ item.label }}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="10px"
          height="10px"
          (click)="close(item)"
          class="cross"
        >
          <path
            fill="white"
            d="M28.941 31.786L.613 60.114a2.014 2.014 0 1 0 2.848 2.849l28.541-28.541 28.541 28.541c.394.394.909.59 1.424.59a2.014 2.014 0 0 0 1.424-3.439L35.064 31.786 63.41 3.438A2.014 2.014 0 1 0 60.562.589L32.003 29.15 3.441.59A2.015 2.015 0 0 0 .593 3.439l28.348 28.347z"
          />
        </svg>
      </div>
    </div>
  `
})
export class TagsComponent {
  @Input() items: Array<any>;
  @Output() closeEvent = new EventEmitter();

  close = item => {
    this.closeEvent.emit(item);
  }
}
