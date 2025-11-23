export interface TicketProps {
    id: string;
    name: string;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    customerId: string | null;
    userId: string | null;
    status: string;
}