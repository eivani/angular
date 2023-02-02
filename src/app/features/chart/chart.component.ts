import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  dataSource: [] = [];
  dataSource1: [] = [];
  columns: {}[] = [{ "dataField": 'Bank', 'caption': ' آیتم', 'allowSorting': true, },
  { "dataField": 'BankName', 'caption': ' آیتم', 'allowSorting': true, },
  { "dataField": 'Date1', 'caption': 'آیتم ', 'allowSorting': true, },
  { "dataField": 'Am1', 'caption': 'آیتم ', 'allowSorting': true, },
  { "dataField": 'Am2', 'caption': ' آیتم', 'allowSorting': true, },
  { "dataField": 'Am3', 'caption': 'آیتم ', 'allowSorting': true, },
  { "dataField": 'Am4', 'caption': ' آیتم', 'allowSorting': true, },
  { "dataField": 'Am5', 'caption': 'آیتم ', 'allowSorting': true, },
  { "dataField": 'Dsc1', 'caption': 'آیتم ', 'allowSorting': true, },]
  maxValue!: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.get('http://localhost:3004/grid').subscribe((item: any) => {
      this.dataSource = item;
      this.dataSource.sort((a, b) => {
        return a['Am4'] - b['Am4'];
      })
      this.maxValue = this.dataSource[this.dataSource.length - 1]
    });
  }

  // to delete and add
  saveData(change: any) {
    
    if (change.type === 'insert') {
      let prm = {
        id: this.dataSource.length + 1,
        Bank: change.data['Bank'],
        BankName: change.data['BankName'],
        Date1: change.data['Date1'],
        Am1: change.data['Am1'],
        Am2: change.data['Am2'],
        Am3: change.data['Am3'],
        Am4: change.data['Am4'],
        Am5: change.data['Am5'],
        Dsc1: change.data['Dsc1'],
        Srt1: change.data['Srt1'],
        Srt2: change.data['Srt2'],
        Tags: change.data['Tags']
      }
      this.http.post('http://localhost:3004/grid', prm).subscribe((item: any) => {
        this.getData();
      })
    } if (change.type === 'remove') {
      this.http.delete('http://localhost:3004/grid/' + change.key.id).subscribe((item: any) => {
        this.getData();
      })
    }
  }

  customizeCell(event: any) {
    if (event.column.dataField === "Am4") {
      if (event['rowType'] == "data") {

        if (event.value == this.maxValue['Am4']) {
          event.cellElement.classList += "cursor-pointer link-primary text-decoration-underline bg-light";
        }
      }
    }
  }

}
