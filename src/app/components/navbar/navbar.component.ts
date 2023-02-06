import { Component } from '@angular/core';
import { faBell, faInfoCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  //Iconos
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faAngleDown = faAngleDown;

  //Estados overlays
  isOpen = false;
  isBodyOpen = false;
}
