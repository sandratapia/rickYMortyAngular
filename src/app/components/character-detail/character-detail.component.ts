import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character;
  suscription: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let state = history.state;
    if(state["id"]) {
      this.character = state;
    }else {
      this.router.navigate([""]);
    }
  }

}
