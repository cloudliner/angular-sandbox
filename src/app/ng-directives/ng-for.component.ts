import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  directives = [
    'ngClass',
    'ngForOf',
    'ngIf',
    'ngPlural',
    'ngSwitch'
  ];
}
