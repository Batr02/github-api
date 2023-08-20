import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/shared/services/github.service'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RepoDetailModalComponent } from '../repo-detail-modal/repo-detail-modal.component';
import { Repo } from 'src/app/shared/models/github-model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {
  login: string = '';
  repos: Repo[] = []

  constructor(
    private route: ActivatedRoute,

    private githubService: GithubService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.login = params.get('login')!;
      this.loadRepos();
    });
  }

  loadRepos(): void {
    this.githubService.getUserRepos(this.login).subscribe(
      (data) => {
        this.repos = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  openDetailModal(repo: Repo): void {
    console.log('repolist',repo);
    const modalRef = this.modalService.open(RepoDetailModalComponent, { centered: true });
    modalRef.componentInstance.repo = repo; 
  }

  goToGitHubPage(url: string): void {
    window.open(url, '_blank');
  }
}
