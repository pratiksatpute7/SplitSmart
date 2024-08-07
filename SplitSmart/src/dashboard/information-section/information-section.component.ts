import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardTitleGroup } from '@angular/material/card';
import { BalanceSummaryModel } from '../../models/balance-summary-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-information-section',
  standalone: true,
  imports: [
    MatCard, 
    MatCardContent,
    MatCardSubtitle, 
    MatCardTitle, 
    MatCardTitleGroup,
    MatCardHeader, 
    CommonModule],
  templateUrl: './information-section.component.html',
  styleUrl: './information-section.component.scss'
})
export class InformationSectionComponent {

  private BalanceSummary : BalanceSummaryModel = new BalanceSummaryModel();

  public get summary(): BalanceSummaryModel {
    return this.BalanceSummary;
  }

  public ngOnInit(): void {
    this.getUserBalanceSummary();
  }

  private getUserBalanceSummary(): void {
    //TODO: make api call to get the summary details for the user 
  }
}
