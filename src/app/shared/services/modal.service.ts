import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  openedModal: any;

  /**
   * opens the modal
   * @param content the modal to be displayed
   */
  open(content: any, size: 'sm' | 'lg' | 'xl' | string = 'xl') {
    return this.openedModal = this.modalService.open(content, { centered: true, size, scrollable: true });
  }

  toggleFullscreen() {
    const modal = document.querySelector('.modal-dialog')
    modal?.classList.toggle('modal-lg')
    modal?.classList.toggle('modal-fullscreen')
  }

  /**
   * closes already opened modal
   */
  close(): void {
    this.openedModal.close();
  }

  dismissAll(): void {
    this.modalService.dismissAll();
  }
}
