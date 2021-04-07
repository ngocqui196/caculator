import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  num1;
  num2;
  color: string = "red";
  @Output() total = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit(): void {
  }
  sum(): number {
    return this.num1 + this.num2;
  }
  out(value: number): void {
    this.total.emit(value);
  }
  onChange(color: string) {
    this.color = color;
  }


}

