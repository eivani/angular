import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  dataSource: {}[] = [];
  seri: { argumentField: string, valueField: string } = { argumentField: "BankName", valueField: "Am2" }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3004/pie').subscribe((item: any) => {
      this.dataSource = item[0].Result.DataSource;

    })
  }

  customizeTooltip(arg: any) {
    return {
      text:`<div class='mb-3'>${arg.argumentText}<br>${arg.valueText} <br> ${arg.percent}</div>`,
      color:'red'
    };
  }


}
