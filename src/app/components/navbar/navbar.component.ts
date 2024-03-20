import {Component} from '@angular/core';
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../modules/auth/services/auth.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgbDropdownMenu,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownItem,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public collapsed: boolean = true;

  constructor(public authService: AuthService, private router: Router) {
  }

  async logout() {
    try {
      await this.authService.logout()
        .then(() => {
          this.router.navigate(['/auth']);
        });

    } catch (error) {
      console.log(error);
    }
  }

}
