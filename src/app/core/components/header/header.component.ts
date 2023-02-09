import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToggleMenuService } from '../../serviese/toggle-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toggleMenuService: ToggleMenuService,
  ) {}

  ngOnInit(): void {
  }

  onClickToggleMenu(event: any) {
    this.toggleMenuService.onClickToggleMenu(event);
  }


}
