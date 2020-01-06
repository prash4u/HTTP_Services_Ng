import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'url';
import { reject } from 'q';


export class UsernameValidators {
    static cannotContainSpace (control:AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0)
            return{cannotContainSpace : true};
        return null;
    }

    static shouldBeUnique(control:AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve,reject) =>{
            setTimeout (() => {   //setTimeout is simulating the Async Operations when server gets timedout
                if(control.value === 'mosh') //this is just mocking the validation, otherwise should be validated with https
                resolve ({shouldBeUnique: true});
            else resolve (null);
            },2000);
        });
/*
        setTimeout (() => {   //setTimeout is simulating the Async Operations when server gets timedout
            if(control.value === 'mosh') //this is just mocking the validation, otherwise should be validated with https
            return {shouldBeUnique: true};
        return null;
        },2000); */
       
        
        
    }
}