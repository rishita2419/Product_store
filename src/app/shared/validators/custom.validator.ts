import { AbstractControl,ValidationErrors } from "@angular/forms";

export function passwordMismatch(control:AbstractControl):ValidationErrors  | null {

    const password = control.get('password')?.value ;
    const confirmPassword = control.get('confirmPassword')?.value ;

    if(password != confirmPassword){
        return {'passwordMismatch':true}
    }else {
        return null ;
    }
}