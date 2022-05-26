import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { NgForm } from '@angular/forms';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[]
  showValidationErrors:boolean

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos=this.dataService.getAllTodos()

  }

  onFormSubmit(form:NgForm){
    
    if(form.invalid) return this.showValidationErrors= true
    if (form.invalid) return alert("No es valida")

    this.dataService.addTodo(new Todo(form.value.text))
    
    this.showValidationErrors=false
    form.reset()
  }

  toggleCompleted(todo:Todo){
    //alert("Todo was clicked. This code is being executed in the TODOS component")
    //set todo to completed
    todo.completed=!todo.completed;
  }

}
