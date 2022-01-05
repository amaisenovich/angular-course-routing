import { ServerStatus } from 'src/enums/ServerStatus'
import { getId } from 'src/utils/getId'

export class Server {
  constructor(public name: string, public status: ServerStatus, private _id: number = getId()) {
  }

  public get id() {
    return this._id
  }
}
