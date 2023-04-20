import { Component, EventEmitter, Output } from '@angular/core';
import { AccountServices } from 'src/app/services/Account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private accountService: AccountServices) {}
  @Output()
  accountsAdded = new EventEmitter<{
    name: string;
    status: string;
  }>();

  onCreateAccount(name: string, status: string) {
    this.accountService.addAccount(name, status);
  }
}
