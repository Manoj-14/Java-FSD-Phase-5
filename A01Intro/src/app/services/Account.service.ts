export class AccountServices {
  accounts = [];

  addAccount(name: string, status: string): void {
    this.accounts.push({ name, status });
  }
  updateAccount(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
  deleteAccount(id: number) {
    this.accounts.splice(id, 1);
  }
}
