import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inline-message',
  templateUrl: './inline-message.component.html',
  styleUrl: './inline-message.component.scss'
})
export class InlineMessageComponent {
  @Input() message: string = "";
  @Input() success: boolean = false;
}
