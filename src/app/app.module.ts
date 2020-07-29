import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details/contact-details.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { AgePipe } from './pipes/age.pipe';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import {RouterModule, Routes} from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
const routes: Routes= [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'contact-list', component: ContactListComponent},
  {path: 'contact-details/:id', component: ContactDetailsComponent},
  {path: 'add-contact', component: AddContactComponent},
  {path: 'edit-contact/:id', component: EditContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ContactDetailsComponent,
    FullnamePipe,
    AgePipe,
    ContactListComponent,
    AddContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
