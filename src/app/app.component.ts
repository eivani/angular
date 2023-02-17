import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnyAaaaRecord, promises, resolve } from 'dns';
import { ToastrService } from 'ngx-toastr';
import { AdminGridComponent } from './shared/components/admin-grid/admin-grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private toastr: ToastrService, private http: HttpClient) {
  }

  ngOnInit(): void {

  }


}
