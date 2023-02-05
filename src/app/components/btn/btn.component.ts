import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit{

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() colorBtn = 'success';

  constructor() { }

  ngOnInit(): void {

  }

  get colors()
  {
    return {
      'bg-success-300' : this.colorBtn === 'success',
      'hover:bg-success-400' : this.colorBtn === 'success',
      'focus:ring-success-200' : this.colorBtn === 'success',
      'bg-primary-300' : this.colorBtn === 'primary',
      'hover:bg-primary-400' : this.colorBtn === 'primary',
      'focus:ring-primary-200' : this.colorBtn === 'primary',
      'bg-red-500' : this.colorBtn === 'red',
      'hover:bg-red-600' : this.colorBtn === 'red',
      'focus:ring-red-700' : this.colorBtn === 'red',
    };
  }

}
