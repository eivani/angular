import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {
  menuCollapse: boolean = true;
  menuCollapseStatus: boolean = false;
  sideBarMenuStatus = new BehaviorSubject<boolean[]>([true, false]);

  constructor() { }

  // method to open and collapse side bar menu
  onClickToggleMenu(event: any) {
    event.stopPropagation();
    this.menuCollapse = !this.menuCollapse;
    // when click on toggle variable equal false to mouseleave 
    if (this.menuCollapse == false) {
      this.menuCollapseStatus = true;
    } else {
      this.menuCollapseStatus = false;
    }
    let arr = [this.menuCollapse, this.menuCollapseStatus]
    this.sideBarMenuStatus.next(arr);
    // this.toggleMenuStatus.emit(this.menuCollapse);
  }

}
