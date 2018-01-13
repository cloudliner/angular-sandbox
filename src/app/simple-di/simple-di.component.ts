import { Component, OnInit } from '@angular/core';
import { SimpleDiService } from './simple-di.service';

@Component({
  selector: 'app-simple-di',
  templateUrl: './simple-di.component.html',
})
export class SimpleDiComponent implements OnInit {
  message: string;

  constructor(private simpleDiService: SimpleDiService) { }

  ngOnInit() {
    this.message = this.simpleDiService.message;
  }
}