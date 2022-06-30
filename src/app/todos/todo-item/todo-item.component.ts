import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlName, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Todo } from '../models/todo.model';
import { edit, remove, setStatus } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @ViewChild('inputEditar') txtInputEditar:ElementRef;
  chkCompletado:FormControl;
  txtInput:FormControl;
  edit:boolean = false;

  constructor(private store:Store<AppState>) {
  }

  ngOnInit(): void {
    /* set values */
    this.txtInput = new FormControl(this.todo?.texto, Validators.required);
    this.chkCompletado = new FormControl(this.todo?.completado);

    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(setStatus({id:this.todo?.id}));
    });
  }

  editar(){
    this.edit = true;
    setTimeout(()=>{
      this.txtInputEditar.nativeElement.select();
    }),1;
  }
  save(){
    this.edit = false;
    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.todo.texto) {
      this.txtInput.setValue(this.todo?.texto);
      return;
    }
    this.store.dispatch(edit({
      id:this.todo.id,
      text:this.txtInput.value
    }));
  }
  delete(){
    this.store.dispatch(remove({id:this.todo?.id}));
  }
}
