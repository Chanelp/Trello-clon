import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
      title: 'Visit my grandma',
    },
    {
      id: '2',
      title: 'Finish homework',
    },
  ];

  doing: toDo[] = [
    {
      id: '3',
      title: 'Buy food',
    },
  ];
  done: toDo[] = [
    {
      id: '4',
      title: 'Play Xbox'
    }
  ];
  books: toDo[] = [
    {
      id: '5',
      title: 'El retrato de Dorian Gray'
    }
  ]

  ngOnInit(): void {}

  drop(event: CdkDragDrop<toDo[]>, ) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex
      );
    }

  }
}
