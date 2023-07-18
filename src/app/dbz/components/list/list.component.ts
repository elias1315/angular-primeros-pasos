import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  

  @Input()
  public characterList: Character[] = [{
     name : 'TRUNKS',
     power: 10
  }];

  @Output()
  public onDeleteCharacter : EventEmitter<string> = new EventEmitter();

  //onDeleteCharacter(index : number) : void{
     // console.log(index);
  // }

  emmitDelete (id ?: string) : void{

     if(!id) return;

     this.onDeleteCharacter.emit(id);
  }

}


