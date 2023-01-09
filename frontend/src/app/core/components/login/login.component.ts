import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/services/auth-state.service';
import { TokenService } from 'src/app/shared/services/token.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors = null;
  hide = true;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
  ) {
    this.loginForm = this.fb.group({
      usernameOrEmail: [],
      password: [],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        console.log(this.loginForm.value);
        this.responseHandler(result);
        console.log(result);
        this.router.navigate(['/']);
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: "Welcome back",
          showConfirmButton: false,
          timer: 2000
        })
      },
      (error) => {
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
      }
    );
  }

  // Handle response
  responseHandler(data:any) {
    this.token.handleData(
      data.accessToken,
      "",//data.user.name,
      "",//data.user.email,
      ""//data.user.id
    );
  }
}
