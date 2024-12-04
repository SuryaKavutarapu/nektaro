import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {
  @Input() title: string = `Heading`;
  @Input() description: string = `Heading`;
  @Input() image: string | null = null;
  @Input() action: string = `Browse menu`;
  @Output() actionEvent: EventEmitter<boolean> = new EventEmitter(true);

  onActionClick(event: any): void {
    console.log(event, this.title);
    this.actionEvent.emit(true);
  }

  get imagePath() {
    return `./assets/${this.image}`;
  }
}
