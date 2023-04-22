import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamesComponent } from './names/names.component';
import { SecretComponent } from './secret/secret.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductComponent } from './products/product/product.component';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { BasicHighlightDirective } from './CustomDirectives/BasicHighlightDirective';
import { BetterHighlighterDirective } from './CustomDirectives/better-highlighter.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { AccountComponent } from './accounts/account/account.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ShortenPipe } from './custom-pipes/shorten.pipe';
import { FilterPipe } from './custom-pipes/filter.pipe';
import { ReversePipe } from './custom-pipes/reverse.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Server', component: ServerComponent },
  { path: 'Secret', component: SecretComponent },
  { path: 'Success', component: SuccessAlertComponent },
  { path: 'Warning', component: WarningAlertComponent },
  { path: 'Product', component: ProductsComponent },
  { path: 'Names', component: NamesComponent },
  { path: 'Account', component: AccountsComponent },
  { path: 'Observable', component: ObservableDemoComponent },
  { path: 'TemplateForm', component: TemplateFormsComponent },
  { path: 'ReactiveForm', component: ReactiveFormsComponent },
  { path: 'Pipes', component: PipesDemoComponent },
];

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
    BetterHighlighterDirective,
    AccountsComponent,
    NewAccountComponent,
    AccountComponent,
    HomeComponent,
    ObservableDemoComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    PipesDemoComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ], // Import FormModeule for two way binding
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
