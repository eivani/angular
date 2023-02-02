import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() dataSource: {}[] = [];
  @Input() seri!: { argumentField: string, valueField: string };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  customizeTooltip(arg: any) {
    let result = '';
    result += '<div class="pb-3 mb-5 fw-bold h6">' + arg.argumentText + '</div>';
    result += '<br> <br>';
    result += '<div class="mb-5 fw-bold h6">' + arg.valueText + '</div>';
    result += '<br> <br>';
    result += '<div class="mb-5 fw-bold h6">' + arg.percent + '</div>';
    return {
      text: result
    }
  }

}
