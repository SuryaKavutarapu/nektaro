import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrl: './tags-input.component.scss'
})
export class TagsInputComponent {
  @Input()
  tags: any[] = [];
  @Input()
  label: string;
  @Input()
  placeholder: string;
  @Input()
  class: string = '';
  @Input()
  required: boolean = false;
  @Input()
  errorMessage: string;
  @Output()
  addChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  removeChange: EventEmitter<any> = new EventEmitter<any>();
  requiredState: boolean;
  constructor() {
    this.errorMessage = 'Tags must not be empty.';
    this.label = 'Enter Tags'
    this.placeholder = 'Enter tags';
    this.requiredState = this.required;
  }

  public clearTags() {
    this.tags = [];
  }

  public removeTag(value: string) {
    this.removeChange.emit(value);
  }

  public inputTag(event: any) {
    if (event.key === 'Enter' || event.key === '13') {
      if (!!event.target.value) {
        this.addChange.emit(event.target.value);
        event.target.value = '';
      }
    }
  }
}
