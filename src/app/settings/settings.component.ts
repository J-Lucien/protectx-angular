import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChildHeaderComponent } from "../child-header/child-header.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ChildHeaderComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
