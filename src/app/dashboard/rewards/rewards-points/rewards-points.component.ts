import { AfterContentChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards-points',
  templateUrl: './rewards-points.component.html',
  styleUrl: './rewards-points.component.scss'
})
export class RewardsPointsComponent implements OnInit {
  @Input() points: number = 0;
  FILL_COLOR: string = '#2B9348';
  BASE_COLOR: string = '#C9E4CA';
  MAX_NEKTARO_POINTS: number = 7;
  data: any = {
    trainerTableData: [],
    trainerModelData: {
      id: 0,
      trainerFirstName: null,
      lastName: null
    }
  }
  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      const objectElement = document.querySelector("object") || null;
      const svgDoc = objectElement?.contentDocument;
      for (let index = 0; index < this.MAX_NEKTARO_POINTS; index++) {
        const svgPath = svgDoc?.getElementById(`NEKT_${index}`);
        svgPath?.setAttribute("fill", this.points > index ? this.FILL_COLOR : this.BASE_COLOR);
      }
    }, 100);
  }




}
