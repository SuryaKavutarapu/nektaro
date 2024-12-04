import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { LayoutService } from './shared/services/layout.service';
import { GhostloadingService } from './shared/services/ghostloading.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  async getCurrentLocation() {
    const coordinates = await Geolocation.getCurrentPosition();

    return coordinates;
  }

  title = 'one';
  isLoading: boolean = false;
  constructor(public readonly layoutService: LayoutService, private readonly ghostLoaderService: GhostloadingService) {
    this.layoutService.setMobileApp();
    this.ghostLoaderService.loaded$.subscribe((loader: boolean) => {
      this.isLoading = loader;
    })
  }
}
