import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";
import { TokenService } from "src/app/shared/services/token.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    public router: Router
  ) {}

  isLoggedIn!: boolean;
  username: any;
  roles!: string[];

  ngOnInit() {
    this.isLoggedIn = this.tokenService.isLoggedIn();
    this.username = this.tokenService.isLoggedIn();

    this.isLoggedIn = this.tokenService.isLoggedIn();
    this.username = this.tokenService.getUsername();
  }

  logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "Your current session will be closed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.tokenService.removeToken();
        this.router.navigate(["login"]);
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: "You are logged out",
          showConfirmButton: false,
          timer: 2000
        })      }
    });
  }
  /*
  isUserInRole(role:any) {
    if (role === 'admin') {
      return this.authService.isUserAdmin();
    }
    return false;
  }*/
}
