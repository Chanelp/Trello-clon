import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { toDo } from 'src/app/models/todo.models';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent implements OnInit {
  todos: toDo[] = [
    {
      id: '1',
      title: 'Tarea 1',
    },
    {
      id: '2',
      title: 'Tarea2',
    },
    {
      id: '3',
      title: 'Tarea 3',
    },
  ];

  ngOnInit(): void {}

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
