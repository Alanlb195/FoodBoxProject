import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';


@NgModule({
imports: [
    IonicModule,
    CommonModule,
],
declarations: [
    FooterComponent,
    HeaderComponent
],
exports: [
    FooterComponent,
    HeaderComponent
]
})

export class SharedModule { }
