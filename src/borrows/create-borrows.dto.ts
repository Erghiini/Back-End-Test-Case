export class CreateBookDto{
    id: number;
    memberCode: string;
    bookCode: string;
    borrowDate: Date;
    returnDate: Date;
    isReturn: boolean;
}