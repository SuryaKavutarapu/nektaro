import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrl: './simple-header.component.scss'
})
export class SimpleHeaderComponent {
  @Input() title: string = `Heading`;
  @Input() info: string = `SAMPLE`;
  @Input() action: boolean =  false;
  @Input() pagename: string | null = null;
  @Output() actionEvent: EventEmitter<boolean> = new EventEmitter(true);

  onActionClick(event: any): void {
    console.log(event, this.pagename);
    this.actionEvent.emit(true);
  }
}
