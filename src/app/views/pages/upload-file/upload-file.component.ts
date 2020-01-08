import { SuscribersListService } from './../../../../services/suscribers-list.service';
import { Component} from '@angular/core';
@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  suscribers:any[];
  constructor(private service:SuscribersListService){
    this.service.getSuscribers().subscribe(
      resoponse=>{
        console.log(resoponse)
      },
      error=>{
        console.log(error)
      }
    )
  }
  
  // this.service.getFiles()
  // // .subscribe(
  // //   response=>{
  // //     this.files=response.allFiles;
  // //     console.log(this.files)
  // //   },
  // // error=>{
  // //   console.log(error);
  // // }
  // )

}
