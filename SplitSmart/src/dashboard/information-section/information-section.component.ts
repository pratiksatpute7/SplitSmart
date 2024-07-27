import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardTitleGroup } from '@angular/material/card';

@Component({
  selector: 'app-information-section',
  standalone: true,
  imports: [
    MatCard, 
    MatCardContent,
    MatCardSubtitle, 
    MatCardTitle, 
    MatCardTitleGroup,
    MatCardHeader],
  templateUrl: './information-section.component.html',
  styleUrl: './information-section.component.scss'
})
export class InformationSectionComponent {

}
