import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';


// Firebase modules
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

import { MatOptionModule , MatSelectModule , MatFormFieldModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { MessagingService } from './messaging.service';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { MatDialogModule } from '@angular/material';
import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    AddTicketComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
    AppRoutingModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [MessagingService, AsyncPipe , { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
