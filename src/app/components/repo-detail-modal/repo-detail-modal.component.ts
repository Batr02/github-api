import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Repo } from 'src/app/shared/models/github-model';

@Component({
  selector: 'app-repo-detail-modal',
  templateUrl: './repo-detail-modal.component.html',
  styleUrls: ['./repo-detail-modal.component.scss']
})
export class RepoDetailModalComponent  {
  @Input() repo!: Repo;

  constructor(private modalService: NgbModal) {}

  close(): void {
    this.modalService.dismissAll();
  }
}
