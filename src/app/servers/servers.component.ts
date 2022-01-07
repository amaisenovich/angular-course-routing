import { Component, OnInit } from '@angular/core';
import { ServersService } from 'src/services/servers.service';
import { Server } from 'src/models/server.model'
import { QueryParam } from 'src/enums/QueryParam';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: Server[] = [];

  constructor(
    private serversService: ServersService,
  ) {
  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
}
