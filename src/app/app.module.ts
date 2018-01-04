import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ch04Module } from './ch04/ch04.module';

import { UnderlineDirective } from './underline.directive';

import { CalcService } from './calc.service';

import { AppComponent } from './app.component';
import { ExpressionsComponent } from './expressions/expressions.component';
import { ClickComponent } from './click/click.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { SimpleComponent } from './simple/simple.component';
import { SumComponent } from './sum/sum.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PipesComponent } from './pipes/pipes.component';
import { SelectorMyAppComponent } from './selector/selector-my-app.component';
import { SelectorComponent } from './selector/selector.component';
import { InputsCounterComponent } from './inputs/inputs-counter.component';
import { InputsComponent } from './inputs/inputs.component';
import { CounterColorDirective } from './inputs/counter-color.directive';
import { OutputsCounterComponent } from './outputs/outputs-counter.component';
import { OutputsComponent } from './outputs/outputs.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpressionsComponent,
    ClickComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    TwoWayComponent,
    SimpleComponent,
    UnderlineDirective,
    SumComponent,
    ParentComponent,
    ChildComponent,
    NgClassComponent,
    NgStyleComponent,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
    PipesComponent,
    SelectorMyAppComponent,
    SelectorComponent,
    InputsCounterComponent,
    InputsComponent,
    CounterColorDirective,
    OutputsCounterComponent,
    OutputsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ch04Module
  ],
  providers: [
    CalcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
