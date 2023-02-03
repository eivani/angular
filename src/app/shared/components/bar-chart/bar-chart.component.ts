import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  dataSource = [];
  

  series: { Field: string, FieldName: string }[] = []
  argumentField!: { value: string, name: string }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3004/bar').subscribe((item: any) => {
      this.dataSource = item[0].DataSource; console.log(item[0].DataSource);
      
      this.series = item[0].Properties.series;
      this.argumentField= item[0].Properties.argument
    });
  }


}
