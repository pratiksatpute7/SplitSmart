import { Component } from '@angular/core';
import { SignupModel } from '../../models/signup-model';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'

})
export class SignupComponent {
  private userSignupDetails: SignupModel = new SignupModel();

  public get getUserSignupDetails(): SignupModel {
    return this.userSignupDetails;
  }

  public submit() {
    console.log(this.userSignupDetails)
  }
  
}