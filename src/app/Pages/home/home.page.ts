import { Component } from '@angular/core';
import { ThemeService } from '../../Shared/Services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public themeService: ThemeService
  ) {}

}
