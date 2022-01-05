import { getId } from 'src/utils/getId'

export class User {
  constructor(public name: string, public id: number = getId()) {
  }
}
