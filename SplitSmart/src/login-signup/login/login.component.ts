import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private hidePassword = true;

  public get passwordVisibility() : boolean {
    return this.hidePassword;
  }

  public showPassword(event: MouseEvent) : void {
    this.hidePassword = !this.hidePassword;
    event.stopPropagation();
  }

  public loginInButtonClicked() {
    
  }
}
