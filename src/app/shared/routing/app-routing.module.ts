import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated
import { SearchListComponent } from '../../components/search-list/search-list.component';
import { AddTicketComponent } from '../../components/add-ticket/add-ticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/search-list', pathMatch: 'full' },
  { path: 'search-list', component: SearchListComponent },
  { path: 'add-ticket', component: AddTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
