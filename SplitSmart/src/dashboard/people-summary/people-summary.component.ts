import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-people-summary',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './people-summary.component.html',
  styleUrl: './people-summary.component.scss'
})
export class PeopleSummaryComponent {

  @Input() youOwe : Boolean = false;

  public ngAfterViewInit() {
    console.log(this.youOwe);
  }

}
