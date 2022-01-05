import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QueryParam } from 'src/enums/QueryParam';
import { Page } from 'src/enums/Page';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from '../services/servers.service';

const routes: Routes = [
  {
    path: Page.USERS,
    component: UsersComponent,
    children: [
      {
        path: `:${QueryParam.ID}/:${QueryParam.NAME}`,
        component: UserComponent
      }
    ]
  },
  {
    path: Page.SERVERS,
    component: ServersComponent,
    children: [
      {
        path: `:${QueryParam.ID}`,
        component: ServerComponent,
        children: [
          {
            path: Page.EDIT,
            component: EditServerComponent
          }
        ]
      }
    ]
  },
  {
    path: Page.HOME,
    component: HomeComponent
  }
]

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
