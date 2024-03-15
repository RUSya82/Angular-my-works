import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() headerTitle: string | null = null;

  @Output() menuClick = new EventEmitter()

  clickHeader(event: Event){
    console.log(event)
  }

  clickMenu(event: MouseEvent){
    event.stopPropagation();
    this.menuClick.emit(event)
    console.log(event.target)
  }

  clickHeart(event: Event){
    event.stopPropagation();
    console.log(event.target)
  }
}
