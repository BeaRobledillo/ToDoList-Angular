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

  todos:Todo[] | undefined
  showValidationErrors:boolean

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos=this.dataService.getAllTodos()

  }
  
  onFormSubmit(form:NgForm){
    
    if(form.invalid) return this.showValidationErrors= true
    
    this.dataService.addTodo(new Todo(form.value.text))
    
    this.showValidationErrors=false
    form.reset()
  }

}
