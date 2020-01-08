import { FilesListService } from './../../../../../services/files-list.service';
// Angular
import { Component,  ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'kt-login',
	templateUrl: './login.component.html',
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent  {
	files:any;
	constructor(private service:FilesListService,private route:Router){
	  this.service.getFiles()
	  .subscribe(
		response=>{
		  this.files=response.allFiles;
		},                  
	  error=>{
		console.log(error);
	  }
	  )
	}

}
