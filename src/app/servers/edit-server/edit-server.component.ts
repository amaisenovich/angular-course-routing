import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QueryParam } from 'src/enums/QueryParam';
import { ServerStatus } from 'src/enums/ServerStatus';
import { URLParam } from 'src/enums/URLParam';
import { Server } from 'src/models/server.model';
import { ServersService } from 'src/services/servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: Server;
  serverName = '';
  serverStatus = ServerStatus.OFFLINE;

  allowEditing = false;

  fragment = '';

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
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
    this.serversService.updateServer(newServer);
  }

}
