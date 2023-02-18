import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { IGridColumn } from '../../models/ag-grid.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: IGridColumn[] = [];
  @Input() showSubmitButton: boolean = false
  @Input() editRow?: {};

  @Output() onCancel = new EventEmitter<boolean>();
  @Output() onSubmit = new EventEmitter<{}>();

  form: FormGroup = new FormGroup({});
  formMode: 'isAddable' | 'isEditable' = 'isAddable';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.editRow && changes['editRow']) {
      this.formMode = "isEditable";

      this.fields.forEach(field => {
        if (field.field ) {
          setTimeout(() => {
            if (field.field && field.format !== 'chips') this.form.patchValue({ [field.field]: changes['editRow'].currentValue[field.field] });
            if (field.format === 'chips' && field.field) {
              const value = changes['editRow'].currentValue[field.field];
              if (!value) return;
              const splitted = value.split(';');
              const filtered = splitted.filter((item: string) => !!item);
              const numbered = filtered.map((item: string) => +item);
              this.form.patchValue({ [field.field]: numbered })
            };
          })
        }
      });
    }
  }

  ngOnInit(): void {
    this.onInitForm();

  }

  onInitForm() {
    this.fields.forEach(item => {
      if (item.field) {
        this.form.addControl(item.field, new FormControl(''));
      }
    })
  }

  onSubmitForm() {
    this.onSubmit.emit(this.form.value);
  }

  cancel() {

  }

}
