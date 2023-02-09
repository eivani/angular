import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToggleMenuService } from 'src/app/core/serviese/toggle-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allowCloseSideBarMenu!: boolean;
  isMenuCollapse: boolean = true;
  menuCollapseStatus: boolean = false;
  isDark = false; // ? notice this

  // Close the side bar menu by clicking on the space of the page
  @HostListener('click', ['$event']) click() {
    if (this.allowCloseSideBarMenu === false) {
      this.allowCloseSideBarMenu = true;
      this.menuCollapseStatus = true;
    }
    else {
      this.isMenuCollapse = true;
      this.menuCollapseStatus = false;
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toggleMenuService: ToggleMenuService,
  ) {}

  ngOnInit() {
    this.onToggleMenu();
  }

  closeSubMenuStatus(event: boolean) {
    this.allowCloseSideBarMenu = event;
  }

  toggleMenuStatus(event: boolean) {
    this.isMenuCollapse = event;
  }

  // get toggle menu state from toggle menu service
  onToggleMenu() {
    this.toggleMenuService.sideBarMenuStatus.subscribe((item) => {
      this.isMenuCollapse = item[0];
      this.menuCollapseStatus = item[1]
    });
  }

}
