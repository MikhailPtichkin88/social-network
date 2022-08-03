export const requiredField = (value:string) =>{
    if (value) return undefined
    return "Field is required"
}

export const maxLength = (length:number)=>{
    return (value:string)=>{
        if(value && value.length < length) return undefined
        return `Maximum length: ${length}`
    }

}