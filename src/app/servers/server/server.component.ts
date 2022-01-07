import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from 'src/models/server.model'
import { ServersService } from 'src/services/servers.service';
import { URLParam } from 'src/enums/URLParam';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private roter: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params[URLParam.ID]);
    })
  }

  onEditClick = () => {
    this.roter.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' }) //, queryParams: { [QueryParam.ALLOW_EDITING]: true } })
  }
}
