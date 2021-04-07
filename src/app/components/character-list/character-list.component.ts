import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  arrPersonajes: any[];

  currentPage: number;
  numPages: number;

  constructor (private personajesService: PersonajesService, private router: Router){
    this.currentPage = 1;
  }

   ngOnInit(){
    this.personajesService.getAll()
      .then(response => {
        this.arrPersonajes = response ['results'];
        this.numPages = response['info']['pages'];
      })
  }

  async changePage(siguiente){
    if(siguiente){
      this.currentPage ++;
    }else{
      this.currentPage--;
    }
    const response = await this.personajesService.getAll(this.currentPage);
    this.arrPersonajes = response['results'];
  }

  showCharacter(character) {
    this.router.navigate(["/character"], {state: character});
  }
}
