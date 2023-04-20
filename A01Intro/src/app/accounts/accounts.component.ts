import { Component } from '@angular/core';
import { AccountServices } from '../services/Account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: [AccountServices],
})
export class AccountsComponent {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountServices) {
    this.accounts = accountService.accounts;
  }

  onAccountAdded(accountData: { name: string; status: string }) {
    this.accounts.push(accountData);
  }
}
