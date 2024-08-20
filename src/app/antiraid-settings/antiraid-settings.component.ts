import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-antiraid-settings',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './antiraid-settings.component.html',
  styleUrl: './antiraid-settings.component.scss'
})
export class AntiraidSettingsComponent {

}
