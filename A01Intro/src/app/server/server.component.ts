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
  status: string = 'danger';

  getServerStatus(): string {
    return this.serverStatus;
  }

  powerButton(): void {
    if (this.serverStatus == 'Online' && this.serverBtn == 'Off') {
      this.serverStatus = 'Offline';
      this.serverBtn = 'On';
      this.status = 'success';
    } else {
      this.serverStatus = 'Online';
      this.serverBtn = 'Off';
      this.status = 'danger';
    }
  }
}
