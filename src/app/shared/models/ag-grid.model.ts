import { ColDef } from "ag-grid-community";

export interface IGridColumn extends ColDef {
    field: string,
    headerName?: string,
    format?: ColumnFormat;
    inputType?: 'number' | 'tel' | 'email' | 'text' | 'date' | 'datePicker' | 'checkbox';
    formattingInfo: {
        indexField: string ;
        valueField: string ;
        items: { [key: string]: string | boolean | number }[]
    };
}

export type ColumnFormat = 'number' | 'currency' | 'currency1' | 'currency6' |
    'currency9' | 'nationalityCode' | 'email' | 'date' |
    'datepicker' | 'tel' | 'mobile' | 'text' | 'textarea' |
    'combo' | 'percent' | 'switch' | 'checkBox' | 'autocomplete' | 'chips' | 'treecombo';