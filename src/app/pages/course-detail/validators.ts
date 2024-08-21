import { ValidatorFn } from "@angular/forms";

export function validateNumberInAddress(): ValidatorFn{
return (control) =>{
    const address = control.value
    const containsNumber = /\d/.test(address)
    return containsNumber || !address ? null : { invalidNumberInAddress: true }
}
}