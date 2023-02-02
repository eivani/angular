import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toasterService: ToastrService) { }

  showSuccess(message: any, title?: any) {
    this.toasterService.success(message, title);
  }

  showError(message: any, title?: any) {
    this.toasterService.error(message, title);
  }

  showInfo(message: any, title?: any) {
    this.toasterService.info(message, title);
  }

  showWarning(message: any, title?: any) {
    this.toasterService.warning(message, title);
  }
}
