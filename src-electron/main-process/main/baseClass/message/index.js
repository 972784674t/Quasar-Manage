import { ipcMain } from 'electron'
import ipcMainHandle from './ipcMainHandle'
export default class Message {
  constructor () {
    this.ipcMainHandle = ipcMainHandle
    this.mountIpcMainHandle()
  }

  mountIpcMainHandle () {
    console.log(this.ipcMainHandle)
    Object.keys(this.ipcMainHandle).forEach(channel => {
      ipcMain.handle(channel, this.ipcMainHandle[channel])
    })
  }
}