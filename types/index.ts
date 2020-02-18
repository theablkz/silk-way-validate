export interface IForm {
    validation: string,
    errorText: string,
    value: string | boolean | number,
    callback: IValidate | undefined
}
export interface IValidate {
    isValid: boolean,
    errorText: string
}

export interface IFormModule{
    value: string,
    errorText?: string,
    isValid: boolean
}

export interface IFormModuleBoolean {
    value: boolean,
    errorText?: string,
    isValid: boolean
}
