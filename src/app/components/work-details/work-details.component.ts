import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Work } from 'src/app/models/work';
import { LanguageService } from 'src/app/services/language.service';
// import Rellax from 'rellax';
@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {
  rellax: any;
  works:Work[]=[]
  curentWork:Work[]=[];
  curentWorkid: number =0;
  constructor(public translate: TranslateService, public language:LanguageService ,public route: ActivatedRoute){
    this.works=[
      {id :1 , name :"Gate Barrier" ,
      images:['../../../assets/images/doors/DSC_8463.jpg',
               '../../../assets/images/doors/DSC_8466.jpg',
               '../../../assets/images/doors/DSC_8469.jpg',
               '../../../assets/images/m/DSC_9012.jpg',
               '../../../assets/images/m/DSC_9005.jpg',
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
    // this.rellax = new Rellax('.rellax');
    this.route.paramMap.subscribe(param => {
      this.curentWorkid = Number(param.get("id") )
      
      console.log(this.curentWork)
    })

    this.curentWork=this.works.filter(work=>work.id==this.curentWorkid)
    console.log( this.curentWork)
  }
}