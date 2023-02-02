import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminGridComponent } from './shared/components/admin-grid/admin-grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("admingrid") admingrid!: AdminGridComponent;
  title = 'angular';
  toastRef!: any;
  myForm!: FormGroup;

  itemsColumns = [
    { field: 'make', sortable: true, filter: true, },
    { field: 'model', sortable: true, filter: true, },
    { field: 'price', sortable: true, filter: true, }
  ]

  itemsRow: { make: string, model: string, price: string }[] = [
    // { make: 'aaa', model: 'gggg', price: 5888888 },
    // { make: 'vf', model: 'gggg', price: 88888 },
  ]
  constructor(private toastr: ToastrService, private http: HttpClient) {
  }


  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.myForm = new FormGroup({
      make: new FormControl(''),
      model: new FormControl(''),
      price: new FormControl('')
    })
  }

  onsubmit() {
    let y = this.myForm.value
    this.itemsRow.push(y)
    this.admingrid.gridApi.setRowData(this.itemsRow);

  }

}
