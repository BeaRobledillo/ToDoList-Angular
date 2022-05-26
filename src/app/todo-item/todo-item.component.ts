import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';
//import tippy from 'tippy.js';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{

  @Input() todo: Todo

  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  test:string='Default Value';

  constructor() { }

  ngOnInit(): void {
    this.test='New Value'
    setTimeout(() => {

    },1000)
  }


  onTodoClicked(){
    //console.log("Todo was clicked")
    this.todoClicked.emit()
  }
  onEditClicked(){
    this.editClicked.emit()
  }

  onDeleteClicked(){

    this.deleteClicked.emit()
  
  }

}
