import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuModel } from '../../models/menu.model';
import { ToggleMenuService } from '../../serviese/toggle-menu.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  menuItems: MenuModel[] = []; // variable to save menu item data
  allowCloseSideBarMenu: boolean = true;
  subscription!: Subscription;

  @Input() menuCollapseStatus: boolean = false;
  @Input() menuCollapse: boolean = true; // variable to collapse or open menu
  @Output() notAllowCloseSubMenuStatus = new EventEmitter<boolean>();

  @ViewChild('sideBarMenuRef') sideBarMenuRef!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private toggleMenuService: ToggleMenuService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    // this.onToggleMenu();
    this.getMenu();
  }

  // get sidebar menu
  getMenu() {
    this.http.get('http://localhost:3004/getMenu').subscribe((item: any) => {
      this.menuItems = item[0].listMenu;
      console.log(item)
    })
    // this.authenticationService.getMenu(branchId).subscribe((item) => {
    //   this.menuItems = item.data.listMenu;
    // });
  }

  // get toggle menu state from toggle menu service
  onToggleMenu() {
    this.toggleMenuService.sideBarMenuStatus.subscribe((item) => {
      this.menuCollapse = item[0];
      this.menuCollapseStatus = item[1];
    });
  }

  // Click on side bar menu to disable
  preventNotAllowCloseSubMenu() {
    this.allowCloseSideBarMenu = false;
    this.notAllowCloseSubMenuStatus.emit(this.allowCloseSideBarMenu);
  }

  // log out button
  logout() {
  }

  // when mouse enter menuShow
  menuShowHover() {
    this.menuCollapse = false;
  }

  // when mouse leave menuShow
  menuCollapseHover() {
    if (!this.menuCollapseStatus) this.menuCollapse = true;
  }

}
