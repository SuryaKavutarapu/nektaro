import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent implements OnInit {
  @Input() tabs: any[] = [];
  @Output() tabChange: EventEmitter<string> = new EventEmitter();
  activeTab: string = '1';
  onTabClick(event: any) {
    sessionStorage.setItem('tabIndex', event);
    this.tabChange.emit(event);
    this.activeTab =  event;
  }

  ngOnInit(): void {
    const activeTabIndex = sessionStorage.getItem('tabIndex');
    if(!!activeTabIndex) {
      this.activeTab =  activeTabIndex;
    } else {
      this.activeTab = '1';
    }
    this.tabChange.emit(this.activeTab);
  }
}
