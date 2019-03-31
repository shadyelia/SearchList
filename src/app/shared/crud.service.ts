import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Ticket } from '../shared/ticket';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  ticketsRef: AngularFireList<any>;      // Reference to tickets list, Its an Observable
  ticketRef: AngularFireObject<any>;     // Reference to ticket object, Its an Observable too


  constructor(private db: AngularFireDatabase) { }   // Inject AngularFireDatabase dependency in constructor


  // Create ticket
  AddTicket(ticket: Ticket) {
    this.ticketsRef.push({
      name: ticket.name,
      email: ticket.description,
      ID: ticket.ID
    });
  }

  // Read Ticket
  GetTicket(id: string) {
    this.ticketRef = this.db.object('tickets-list/' + id);
    return this.ticketRef;
  }

  // Read Tickets List
  GetTicketsList() {
    this.ticketsRef = this.db.list('tickets-list');
    return this.ticketsRef;
  }

  // Update User
  UpdateTicket(ticket: Ticket) {
    this.ticketRef.update({
      name: ticket.name,
      email: ticket.description,
      ID: ticket.ID
    });
  }

  // Delete User
  DeleteTicket(id: string) { 
    this.ticketRef = this.db.object('tickets-list/' + id);
    this.ticketRef.remove();
  }

}
