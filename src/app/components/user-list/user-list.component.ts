import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/shared/services/github.service'; 
import { User } from 'src/app/shared/models/github-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  searchQuery = '';
  errorMessage = '';
  enableToReloadUsers = false;

  constructor(
    private githubService: GithubService
    ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.githubService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error(error);
        this.errorMessage = error.message;
      }
    );
  }

  reloadUsers() {
    this.errorMessage = '';
    this.searchQuery = '';
    this.loadUsers();
    this.enableToReloadUsers = false
  }

  searchUsers(): void {
    this.errorMessage = '';
    this.enableToReloadUsers = true;
  
    if (this.searchQuery) {
      this.githubService.searchUsers(this.searchQuery).subscribe(
        (response) => {
          this.users = response.items;
          if (this.users.length === 0) {
            this.errorMessage = 'No users found.';
          }
        },
        (error) => {
          console.error('Error searching users:', error);
          this.errorMessage = 'Error searching users.';
        }
      );
    } else {
      this.loadUsers();
    }
  }

}
