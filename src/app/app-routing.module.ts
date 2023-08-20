import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';

const appRoutes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'repos/:login', component: RepoListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
