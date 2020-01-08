import { AbstractControl, ValidationErrors } from '@angular/forms';
export class UploadFileValidators{
    static canontCantainSpace(control:AbstractControl):ValidationErrors |null {
        if((control.value as String).indexOf(' ') >0){
            return {canontContainSapce:true}
        }
        else{
            return null;
        }
    }
    //when we want to get result from server and want to 
    //await for asynochronous call we should use the Promise
    static shouldUnique(control:AbstractControl): Promise< ValidationErrors |null > {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(control.value === 'shahzad') resolve({shouldUnique:true});
                 else resolve(null);
            },2000)
        });
   
    }

}