import { getNsPrefix } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId: number = 1;
  serverStatus: string = 'Online';
  serverBtn: string = 'Off';
  serverName: string = 'Server name';
  serverDiscription: string = 'Initial Description';

  getServerStatus(): string {
    return this.serverStatus;
  }

  powerButton(): void {
    if (this.serverStatus == 'Online' && this.serverBtn == 'Off') {
      this.serverStatus = 'Offline';
      this.serverBtn = 'On';
    } else {
      this.serverStatus = 'Online';
      this.serverBtn = 'Off';
    }
  }

  onUpdateServerName(event: any) {
    const value = event.target.value;
    this.serverName = value;
  }

  getServerColor() {
    return this.serverStatus == 'Online' ? 'green' : 'red';
  }
  getServerClass() {
    return this.serverStatus == 'Online' ? 'bg-danger' : 'bg-success';
  }
}
