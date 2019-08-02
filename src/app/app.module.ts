import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { UrlPathService } from "./url-path.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarnavComponent } from './starnav/starnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatGridListModule } from '@angular/material';
import { CategoryComponent } from './category/category.component';
import { ItemsCategoryComponent } from './items-category/items-category.component';
import { IndividualDetailsComponent } from './individual-details/individual-details.component';

import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StarnavComponent,
    CategoryComponent,
    ItemsCategoryComponent,
    IndividualDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatCardModule,
    LayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    JwSocialButtonsModule,
    ReactiveFormsModule
  ],
  providers: [
    UrlPathService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
