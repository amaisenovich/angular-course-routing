import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Server } from 'src/models/server.model'
import { ServersService } from 'src/services/servers.service';
import { QueryParams } from 'src/enums/QueryParams';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params[QueryParams.ID]);
    })
  }
}
