import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  imports: [],
  templateUrl: './menu-button.component.html',
})
export class MenuButtonComponent {
  @Input() text?: string;
}
