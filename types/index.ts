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