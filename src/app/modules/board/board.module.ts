import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { ColumnComponent } from './column/column.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BoardComponent } from './board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    TaskComponent,
    ColumnComponent,
    SidebarComponent,
    BoardComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
