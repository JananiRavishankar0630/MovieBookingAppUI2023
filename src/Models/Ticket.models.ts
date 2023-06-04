export interface Ticket {
    ticketId: string,
    NoOfTicketsBooked: string,
    MovieName: string,
    TheatreName: string,
    SeatNo: string,
    TicketStatus: string

}

export interface TicketBooking {
    EmailId: string,
    MovieName: string,
    TheatreName: string,
    TicketId: string,
    TotalSeatsBooked : string,
    SeatsBooked: string
}