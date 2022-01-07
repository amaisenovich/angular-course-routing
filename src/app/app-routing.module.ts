import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { URLParam } from 'src/enums/URLParam';
import { Page } from 'src/enums/Page';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';

import { AuthGuardService } from 'src/router/auth-guard.service';

const routes: Routes = [
  {
    path: Page.USERS,
    component: UsersComponent,
    children: [
      {
        path: `:${URLParam.ID}/:${URLParam.NAME}`,
        component: UserComponent
      }
    ]
  },
  {
    path: Page.SERVERS,
    component: ServersComponent,
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: `:${URLParam.ID}`,
        component: ServerComponent
      },
      {
        path: `:${URLParam.ID}/${Page.EDIT}`,
        component: EditServerComponent
      }
    ]
  },
  {
    path: Page.HOME,
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: Page.HOME
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}