import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QueryParams } from 'src/enums/QueryParams';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from '../services/servers.service';

const routes: Routes = [{
  path: 'users',
  component: UsersComponent
}, {
  path: `users/:${QueryParams.ID}/:name`,
  component: UserComponent
}, {
  path: 'servers',
  component: ServersComponent
}, {
  path: `servers/:${QueryParams.ID}`,
  component: ServerComponent
}, {
  path: `servers/:${QueryParams.ID}/edit`,
  component: EditServerComponent
}, {
  path: '',
  component: HomeComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
