import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { PeopleSummaryComponent } from '../people-summary/people-summary.component';

@Component({
  selector: 'app-dashboard-summary',
  standalone: true,
  imports: [MatTabsModule, PeopleSummaryComponent],
  templateUrl: './dashboard-summary.component.html',
  styleUrl: './dashboard-summary.component.scss'
})
export class DashboardSummaryComponent {


}
