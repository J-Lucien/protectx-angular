import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommandsComponent } from './commands/commands.component';
import { ServerComponent } from './server/server.component';
import { AboutComponent } from './about/about.component';
import { AgreementComponent } from './agreement/agreement.component';
import { SettingsComponent } from './settings/settings.component';
import { AntiraidSettingsComponent } from './antiraid-settings/antiraid-settings.component';
import { HomeSettingsComponent } from './home-settings/home-settings.component';
import { WhitelistComponent } from './whitelist/whitelist.component';
import { GreetingsComponent } from './greetings/greetings.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'commands',component:CommandsComponent},
    {path:'server',component:ServerComponent},
    {path:'about',component:AboutComponent},
    {path:'agreement',component:AgreementComponent},
    {path:'settings',component:SettingsComponent,
        children:[
            {path:'',component:HomeSettingsComponent},
            {path:'antiraid-settings',component:AntiraidSettingsComponent},
            {path:'greeting',component:GreetingsComponent},
            {path:'whitelist',component:WhitelistComponent}
        ]
    }
];
