import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AnimationsComponent } from './animations.component';
import { StateComponent } from './state.component';
import { State2Component } from './state2.component';
import { TransitionComponent } from './transition.component';
import { Transition2Component } from './transition2.component';
import { Transition3Component } from './transition3.component';
import { StyleComponent } from './style.component';
import { Style2Component } from './style2.component';
import { AnimateComponent } from './animate.component';
import { Animate2Component } from './animate2.component';
import { KeyframesComponent } from './keyframes.component';
import { GroupComponent } from './group.component';
import { SequenceComponent } from './sequence.component';
import { QueryComponent } from './query.component';
import { StaggerComponent } from './stagger.component';
import { AnimateChildComponent } from './animate-child.component';
import { UseAnimationComponent } from './use-animation.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AnimationsComponent,
    StateComponent,
    State2Component,
    TransitionComponent,
    Transition2Component,
    Transition3Component,
    StyleComponent,
    Style2Component,
    AnimateComponent,
    Animate2Component,
    KeyframesComponent,
    GroupComponent,
    SequenceComponent,
    QueryComponent,
    StaggerComponent,
    AnimateChildComponent,
    UseAnimationComponent
  ],
  exports: [
    AnimationsComponent,
    StateComponent,
    State2Component,
    TransitionComponent,
    Transition2Component,
    Transition3Component,
    StyleComponent,
    Style2Component,
    AnimateComponent,
    Animate2Component,
    KeyframesComponent,
    GroupComponent,
    SequenceComponent,
    QueryComponent,
    StaggerComponent,
    AnimateChildComponent,
    UseAnimationComponent
  ]
})
export class AnimationsModule { }
