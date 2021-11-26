import { Module } from '@nestjs/common';
import { AppController } from "./app.controller";
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users/users.entity';
// import { UsersController } from './users/users.controller';
// import { UsersService } from './users/users.service';
import { Member } from './members/members.entity';
import { MembersController } from './members/members.controller';
import { MembersService } from './members/members.service';
import { Book } from './books/books.entity';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { Borrow } from './borrows/borrows.entity';
import { BorrowsController } from './borrows/borrows.controller';
import { BorrowsService } from './borrows/borrows.service';
// import { ReturnBook } from './return-books/return-books.entity';
// import { ReturnBooksController } from './return-books/return-books.controller';
// import { ReturnBookService } from './return-books/return-books.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Member, Book, Borrow])
  ],
  controllers: [AppController, MembersController, BooksController, BorrowsController],
  providers: [AppService, MembersService, BooksService, BorrowsService],
})
export class AppModule {}
