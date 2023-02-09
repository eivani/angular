export class MenuModel {
    "dsc": string;
    "parentId"?: null | string;
    "systemId": string;
    "title": string;
    "subTree": { child: MenuModel[] }
}
