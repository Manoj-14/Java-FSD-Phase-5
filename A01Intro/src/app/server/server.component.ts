import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  serverId: number = 1;
  serverStatus: string = 'Offline';

  getServerStatus(): string {
    return this.serverStatus;
  }
}
