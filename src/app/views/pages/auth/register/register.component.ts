import { CommonClass } from './../../../../../common/common-url';
// Angular
import { Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { requiredFileType } from './file-Validation';


@Component({
	selector: 'kt-register',
	templateUrl: './register.component.html',
	encapsulation: ViewEncapsulation.None
})
export class RegisterComponent  {
	error:boolean=false;
	constructor(private http: HttpClient,private fb: FormBuilder, private cd: ChangeDetectorRef) { }
	// Url: CommonClass = new CommonClass();
	Url=CommonClass.commonUrl;

	// Register Form components 
	uploadFile=new FormGroup({
		// getting file name and checking validations 
		filename: new FormControl('',[
			Validators.required,
				Validators.minLength(3),
				Validators.maxLength(100)
		]),
		//getting access tokken and checking validations
		accessToken:new FormControl('',[
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(100)
		]),
		//file name validations
		file:new FormControl('',[
			Validators.required
		])
	})
	//validator function which genrates the error 
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.uploadFile.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}


	//function call on submit the form 
	submit() {
		this.http.post(this.Url+'/files/upload',this.uploadFile.value)
		.subscribe(
			res => console.log(res)
		);
	}
	onFileChange(event) {
		let file = event.target.files[0]; 
		const extension = file.name.split('.')[1].toLowerCase();
		if (extension.toLowerCase() !== 'csv') {
			this.error=true;
		}
		else{
			this.error=false;
		}
	}
}
