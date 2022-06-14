import { Component } from '@angular/core';
import { ThemeService } from './Shared/Services/theme.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  theme: boolean = this.themeService.getTheme();

  constructor(
    private platform: Platform,
    public themeService: ThemeService,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.themeService.setTheme();
    });
  }
}
