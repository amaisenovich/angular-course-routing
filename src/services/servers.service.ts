import { Server } from 'src/models/server.model'
import { ServerStatus } from 'src/enums/ServerStatus'

export class ServersService {
  private servers = [
    new Server("PROD", ServerStatus.ONLINE),
    new Server("TEST", ServerStatus.OFFLINE),
    new Server("DEV", ServerStatus.OFFLINE)
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    return this.servers.find((s) => s.id === id);
  }

  updateServer(updates: Server) {
    const server = this.getServer(updates.id)
    if (server) {
      server.name = updates.name;
      server.status = updates.status;
    }
  }
}
