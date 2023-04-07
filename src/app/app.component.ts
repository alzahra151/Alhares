import { HostListener ,Component } from '@angular/core';
import { trigger, animate, transition, style } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent {
  title = 'Alhares';
  public showOverlay = true;

  constructor(translate: TranslateService ) {
    translate.addLangs(['en','ar']);
    translate.setDefaultLang('ar');
    translate.use('ar');
  }
 
}

