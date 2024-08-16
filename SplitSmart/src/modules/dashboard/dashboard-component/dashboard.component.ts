import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { InformationSectionComponent } from '../information-section/information-section.component';
import { DashboardSummaryComponent } from '../dashboard-summary/dashboard-summary.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    MenuComponent,
    MatCardModule,
    MatButtonModule,
    InformationSectionComponent,
    DashboardSummaryComponent
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
