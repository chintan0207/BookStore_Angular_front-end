import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MybookComponent } from './mybook/mybook.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'booklist', component: BookListComponent},
  {path:'addbook', component: AddBookComponent, canActivate: [authGuard]},
  {path:'updatebook/:id', component: UpdateBookComponent},
  {path: 'bookdetails/:id', component: BookDetailsComponent},
  {path: 'mybooks', component:MybookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
