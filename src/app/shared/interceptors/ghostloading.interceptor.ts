import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, finalize } from 'rxjs';
import { GhostloadingService } from '../services/ghostloading.service';

@Injectable()
export class GhostloadingInterceptor implements HttpInterceptor {

  private totalRequests = 0;

  constructor(private ghostLoadingService: GhostloadingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.totalRequests++;
    this.ghostLoadingService.setLoader(true);
    return next.handle(request).pipe(delay(0)).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.ghostLoadingService.setLoader(false);
        }
      })
    );
  }
}
