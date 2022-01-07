import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QueryParam } from 'src/enums/QueryParam';
import { ServerStatus } from 'src/enums/ServerStatus';
import { URLParam } from 'src/enums/URLParam';
import { Server } from 'src/models/server.model';
import { CanComponentDeactivate } from 'src/router/can-deactivate.guard';
import { ServersService } from 'src/services/servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: Server;
  serverName = '';
  serverStatus = ServerStatus.OFFLINE;

  allowEditing = false;

  fragment = '';

  get hasChanges(): boolean {
    return (
      this.server.name !== this.serverName ||
      this.server.status !== this.serverStatus
    )
  }

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const serverId = +params[URLParam.ID]
      this.server = this.serversService.getServer(serverId)
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    })

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEditing = queryParams[QueryParam.ALLOW_EDITING] === 'true'
    })
  }

  onUpdateServer() {
    const newServer = new Server(this.serverName, this.serverStatus, this.server.id)
    this.server = this.serversService.updateServer(newServer);
    this.router.navigate(
      ['../'],
      {
        relativeTo: this.route
      }
    )
  }

  canDeactiveate: () => boolean | Observable<boolean> | Promise<boolean> = () => {
    if (this.hasChanges) {
      return window.confirm('You changes will be lost. Are you sure?')
    }

    return true
  }
}
