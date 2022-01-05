import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerStatus } from 'src/enums/ServerStatus';
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

  allowEdiding = false;

  fragment = '';

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    const newServer = new Server(this.serverName, this.serverStatus, this.server.id)
    this.serversService.updateServer(newServer);
  }

}
