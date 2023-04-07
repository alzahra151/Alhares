import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import  AOS from 'aos';
import * as $ from 'jquery';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarVisible = true;
  previousScrollPosition = 0;
  currentScrollPosition = 0;
  constructor( public translate: TranslateService, public language:LanguageService){}
  MenuIsopen = false;
  lang:String="ar"
  ngOnInit(): void {
    $(document).ready(function() {
      $('.navbar-toggler').click(function() {
        $('#overlay').fadeToggle();
      });
    });

    this.language.languge.subscribe(()=>{
     console.log( this.language.languge.value)
     this.lang=this.language.languge.value
    })
     
 
   
  }
 
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  //   if (this.currentScrollPosition > this.previousScrollPosition) {
  //     // Scrolling down
  //     this.navbarVisible = false;
  //   } else {
  //     // Scrolling up
  //     this.navbarVisible = true;
  //   }

  //   this.previousScrollPosition = this.currentScrollPosition;
  // }
 
  ngAfterViewInit(){
    AOS.init( {duration: 500, once: false,})
    AOS.refresh();
  }
openMenu() {
  this.MenuIsopen=!this.MenuIsopen
}
swichLanguage(){
this.language.swichLang()
}
}

