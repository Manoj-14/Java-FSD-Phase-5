import { Component, Input } from '@angular/core';
import { AccountServices } from 'src/app/services/Account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  constructor(private accountService: AccountServices) {}

  @Input('account')
  account: {
    name: string;
    status: string;
  };

  @Input('id')
  id: number;

  changeStatus(status: string) {
    this.accountService.updateAccount(this.id, status);
  }
  deleteAccount() {
    this.accountService.deleteAccount(this.id);
  }
}
