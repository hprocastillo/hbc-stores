import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public formLogin: FormGroup;
  public typeInput: string = "password";
  public password: boolean = false;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  showPassword() {
    if (this.password) {
      this.password = false;
      this.typeInput = "password";
    } else {
      this.password = true;
      this.typeInput = "text";
    }
  }

  async onSubmit() {
    if (this.formLogin.valid) {
      try {
        await this.authService.login(this.formLogin.value)
          .then(() => {
            this.router.navigate(['/dashboard']);
          });

      } catch (error) {
        console.log(error);
      }
    }
  }

}
