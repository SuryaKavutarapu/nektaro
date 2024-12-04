import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { GhostloadingService } from '../../services/ghostloading.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  searchInput: string = '';
  @Input() tableHeaders: [] = []
  @Input() tableData: [] = [];
  @Output() view: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  loading: boolean = false;
  constructor(private readonly ghostLoaderService: GhostloadingService) {
    this.ghostLoaderService.loaded$.subscribe((loader) => {
      this.loading = loader;
    })
  }

  viewData(id: any) {
    this.view.emit(id);
  }

  deleteData(id: any) {
    this.delete.emit(id);
  }
}
