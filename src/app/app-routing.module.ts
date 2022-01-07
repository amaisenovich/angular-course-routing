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

import { AuthGuard } from 'src/router/auth.guard';
import { CanDeactivateGuard } from "src/router/can-deactivate.guard";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from 'src/router/server.resolver';


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
    canActivateChild: [AuthGuard],
    children: [
      {
        path: `:${URLParam.ID}`,
        component: ServerComponent,
        resolve: {
          server: ServerResolver
        }
      },
      {
        path: `:${URLParam.ID}/${Page.EDIT}`,
        component: EditServerComponent,
        canDeactivate: [
          CanDeactivateGuard
        ]
      }
    ]
  },
  {
    path: Page.HOME,
    component: HomeComponent
  },
  {
    path: Page.NOT_FOUND,
    component: ErrorPageComponent,
    data: {
      errorMessage: 'The page that you are looking for was not found!'
    }
  },
  {
    path: '**',
    redirectTo: Page.NOT_FOUND
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