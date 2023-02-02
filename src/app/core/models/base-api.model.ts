export class BaseApiModel {
    constructor(
        public data: any,
        public errors: ApiErrorsModel[],
        public statusCode: number,
    ) { }
}

export class ApiErrorsModel {
    code?: number;
    parameters?: {}[];
    Desc?:string
}

