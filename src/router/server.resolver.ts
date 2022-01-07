import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { URLParam } from "src/enums/URLParam";
import { Server } from "src/models/server.model";
import { ServersService } from "src/services/servers.service";

@Injectable({
  providedIn: 'root'
})
export class ServerResolver implements Resolve<Server> {
  constructor(private serversServer: ServersService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    debugger
    const id = +route.params[URLParam.ID]
    return new Promise<Server>((resolve) => {
      setTimeout(
        () => {
          const server = this.serversServer.getServer(id)
          resolve(server)
        },
        1000
      )
    })
  }
}
