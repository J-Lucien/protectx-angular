import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-child-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './child-header.component.html',
  styleUrl: './child-header.component.scss'
})
export class ChildHeaderComponent {

}
