import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos:Todo[] = [
    new Todo('this is a test!',false),
    new Todo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, id quo qui assumenda perspiciatis saepe enim iste fugiat placeat odit non quidem sapiente excepturi veritatis! Totam hic accusantium quaerat eveniet.',true)
   
  ]

  constructor() { }

  getAllTodos(){
    return this.todos
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
  }

updateTodo(index:number,updatedTodo:Todo){
  this.todos[index]=updatedTodo
}
deleteTodo(index:number ){
  this.todos.splice(index,)
}

}
