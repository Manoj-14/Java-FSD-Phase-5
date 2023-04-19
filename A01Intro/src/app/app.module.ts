import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { NamesComponent } from './names/names.component';
import { SecretComponent } from './secret/secret.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductComponent } from './products/product/product.component';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { BasicHighlightDirective } from './CustomDirectives/BasicHighlightDirective';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    NamesComponent,
    SecretComponent,
    AddProductComponent,
    ProductComponent,
    LifecycleDemoComponent,
    BasicHighlightDirective,
  ],
  imports: [BrowserModule, FormsModule], // Import FormModeule for two way binding
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
