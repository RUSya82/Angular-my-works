import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-my-works';
  isSidenavOpenedParent = false;

  onMenuClick(event: MouseEvent) {
    // console.log('Menu click from app');
    this.isSidenavOpenedParent = !this.isSidenavOpenedParent;
  }
}
