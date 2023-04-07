import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
works:any[]=[]
lang:String="ar"
constructor(public translate: TranslateService, public language:LanguageService){
  this.works=[
    {id :1 , name :"Gate Barrier" ,
    images:['../../../assets/images/doors/DSC_8463.jpg',
             '../../../assets/images/doors/DSC_8466.jpg',
             '../../../assets/images/doors/DSC_8469.jpg',
             '../../../assets/images/m/DSC_9012.jpg',
             '../../../assets/images/m/DSC_9005.JPG',
             '../../../assets/images/doors/DSC_8480.jpg',
             '../../../assets/images/doors/DSC_8647.jpg',
             '../../../assets/images/doors/DSC_8654.jpg',
             '../../../assets/images/doors/DSC_8664.jpg',]
    
    },
    {id :2 , name :"Surveillance Cameras" ,
    images:['../../../assets/images/camera/DSC_8766.jpg',
          '../../../assets/images/camera/DSC_8980.jpg',
          '../../../assets/images/camera/DSC_8984.jpg',
          '../../../assets/images/camera/DSC_8987.jpg',
          '../../../assets/images/camera/DSC_8989.jpg',
        ]
      },
      {id :3 ,name :"Network Solutions",
    images:['../../../assets/images/network/DSC_8336.jpg',
            '../../../assets/images/network/DSC_8548.jpg',
            '../../../assets/images/network/DSC_8744.jpg',
            '../../../assets/images/network/DSC_8746.jpg',
            '../../../assets/images/network/DSC_8562.jpg',
            '../../../assets/images/network/DSC_8676.jpg',
            '../../../assets/images/network/DSC_8721.jpg',
            '../../../assets/images/network/DSC_8744.jpg',],
          },
          {id :4 ,name :"" ,
    images:['../../../assets/images/nown/DSC_8397.jpg',
             '../../../assets/images/nown/DSC_8402.jpg',
            '../../../assets/images/nown/DSC_8445.jpg',
            '../../../assets/images/nown/DSC_8452.jpg',
            '../../../assets/images/nown/DSC_8456.jpg',]}
  ]
}
  ngOnInit(): void {
    this.language.languge.subscribe(()=>{
      console.log( this.language.languge.value)
      this.lang=this.language.languge.value
     })
  }

}
