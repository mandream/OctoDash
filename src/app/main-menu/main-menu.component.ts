import { Component } from '@angular/core';

import { AppService } from '../app.service';

import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  public constructor(public service: AppService,
                     private configService: ConfigService,) {
                       this.cncMode = configService.iscncMode()
                     }

  public settings = false;
  public cncMode = false;

  public showSettings(): void {
    this.settings = true;
  }

  public hideSettings(): void {
    setTimeout((): void => {
      this.settings = false;
    }, 350);
  }
}
