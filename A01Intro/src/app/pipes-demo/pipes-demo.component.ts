import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css'],
})
export class PipesDemoComponent {
  servers: {
    ServerSize: string;
    name: string;
    status: string;
    started: Date;
  }[] = [
    {
      ServerSize: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date('2022-04-20'),
    },
    {
      ServerSize: 'large',
      name: 'Database Server',
      status: 'stable',
      started: new Date('2021-02-21'),
    },
    {
      ServerSize: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date('2019-01-20'),
    },
    {
      ServerSize: 'small',
      name: 'QA Server',
      status: 'Critical',
      started: new Date('2022-12-20'),
    },
  ];

  getStatusClass(server) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'Critical',
    };
  }
}
