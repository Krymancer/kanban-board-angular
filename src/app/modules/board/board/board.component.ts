import { Component, Inject, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Task } from '../../models/tasks/task.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

    todo: Task[] = [];
    done: Task[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.todo = [
      {
        title: 'Task 1',
        description: 'Description 1',
      },
      {
        title: 'Task 2',
        description: 'Description 2',
      }
    ];

    this.done = [
      {
        title: 'Task 1',
        description: 'Description 1',
      },
      {
        title: 'Task 2',
        description: 'Description 2',
      },
      {
        title: 'Task 3',
        description: 'Description 3',
      }
    ];
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTask(task: Task) {
    this.todo.push(task);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent,
      {
        width: '250px',
        data: {title: "", description: ""} as Task,
      });

    dialogRef.beforeClosed().subscribe(result => {
      if(result && result.title != "" && result.description != "")
        this.addTask(result);
    });
  }
}
