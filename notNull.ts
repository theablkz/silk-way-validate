class NotNull {
    errorText: string
    constructor(){
        this.errorText = ''
    }
    validate(data:String, errorText: string){
        if(data.length < 1){
            this.errorText = errorText
            return false
        }
        return true
    }
}

export default NotNull