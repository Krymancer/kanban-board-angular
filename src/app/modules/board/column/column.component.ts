import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/tasks/task.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass']
})
export class ColumnComponent implements OnInit {

  @Input() tasks: Task[] = [];

  @Input() title: string = "New Column";

  constructor() { }

  ngOnInit(): void {
  }

}
