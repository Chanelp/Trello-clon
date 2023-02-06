import { Component } from '@angular/core';
import { faSquarePollVertical, faBolt, faHeart, faUser, faAngleUp, faAngleDown, faClock, faAdd, faBorderAll, faUsers, faGear} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  // Iconos
  faHeart = faHeart;
  faSquarePollVertical = faSquarePollVertical;
  faBolt = faBolt;
  faUser = faUser;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faClock = faClock;
  faAdd = faAdd;
  faBorderAll =faBorderAll;
  faUsers = faUsers;
  faGear = faGear;
  faTrello = faTrello;

  // Variables
  items = [
    {
      label: 'Contacts',
      items: [
        {
          label: 'Sub Item 1.1'
        },
        {
          label: 'Sub Item 1.2'
        }
      ],
    },
    {
      label: 'Notes',
      items: [
        {
          label: 'Sub Item 2.1'
        },
        {
          label: 'Sub Item 2.2'
        }
      ],
    },
    {
      label: 'Earrings',
      items: [
        {
          label: 'Sub Item 3.1'
        },
        {
          label: 'Sub Item 3.2'
        }
      ],
    },
  ];
}
