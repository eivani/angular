import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl,NG_VALUE_ACCESSOR,Validators} from "@angular/forms";
import * as moment from "jalali-moment";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
})
export class DatePickerComponent implements OnInit {
  @Input() label: string = 'تاریخ';
  @Input() placeHolder: string = 'انتخاب کنید';
  @Input() minDate: any = moment().locale('fa').format('YYYY/MM/DD');
  @Input() isValidation: boolean = false;

  inputControl!: FormControl;
  _onChange?: Function;
  _onTouch?: Function;


  constructor() { }


  ngOnInit(): void {
    this.inputControl = new FormControl("", this.isValidation == true ? Validators.required : null);
  }

  ngAfterContentInit () {
    if (this.inputControl.value) {
      const selectedDate = moment(this.inputControl.value).format("jYYYY/jMM/jDD");
      const currentDate = moment.from(selectedDate, "fa");
      this.inputControl.patchValue(currentDate);
      if (!this._onChange) return;
      this._onChange(selectedDate);
    }
  }

  writeValue(value: any): void {
    const selectedDate = moment.from(value, "fa");
    this.inputControl?.setValue(selectedDate);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  onInput(event: MatDatepickerInputEvent<any>) {
    if (!this._onChange) return;
    this._onChange('_onChange',event.value);
  }

  onChange(event: MatDatepickerInputEvent<any>) {
    const selectedDate = moment(event.value).format("jYYYY/jMM/jDD");
    const currentDate = moment.from(selectedDate, "fa");
    this.inputControl.patchValue(currentDate);
    if (!this._onChange) return;
    this._onChange(selectedDate);
  }
}
