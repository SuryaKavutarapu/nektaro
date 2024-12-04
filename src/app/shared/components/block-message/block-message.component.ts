import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-message',
  templateUrl: './block-message.component.html',
  styleUrl: './block-message.component.scss'
})
export class BlockMessageComponent {
  @Input() data: any = {
    message: '',
    success: false
  };
}
