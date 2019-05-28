import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progresoAzul: number = 60;
  progresoVerde: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
