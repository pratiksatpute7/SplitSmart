import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { InformationSectionComponent } from './information-section/information-section.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DashboardComponent,
    MenuComponent,
    InformationSectionComponent
  ],
  exports: [
  ]
})
export class DashboardModule { }
