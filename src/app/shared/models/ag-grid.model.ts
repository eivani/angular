import { ColDef } from "ag-grid-community";

export interface IGridColumn extends ColDef {
    field: string,
    headerName?: string
}