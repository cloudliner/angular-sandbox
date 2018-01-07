import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgDirectivesModule } from './ng-directives/ng-directives.module';
import { Ch04Module } from './ch04/ch04.module';
import { SelectorModule } from './selector/selector.module';
import { InputsModule } from './inputs/inputs.module';
import { OutputsModule } from './outputs/outputs.module';
import { HostModule } from './host/host.module';
import { ExportAsModule } from './export-as/export-as.module'
import { ViewProvidersModule } from './view-providers/view-providers.module';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { QueriesModule } from './queries/queries.module';
import { AnimationsModule } from './animations/animations.module';

import { UnderlineDirective } from './underline.directive';

import { CalcService } from './calc.service';

import { AppComponent } from './app.component';
import { AppSectionComponent } from './app.component';
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
import { PipesComponent } from './pipes/pipes.component';
import { ProvidersComponent } from './providers/providers.component';
import { TemplateComponent } from './template/template.component';
import { TemplateUrlComponent } from './template/template-url.component';
import { StylesComponent } from './styles/styles.component';
import { StyleUrlsComponent } from './styles/style-urls.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { HostComponent } from './host/host.component';
import { HostDecoratorModule } from './host-decorator/host-decorator.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgDirectivesModule,
    Ch04Module,
    SelectorModule,
    InputsModule,
    OutputsModule,
    HostModule,
    ExportAsModule,
    ViewProvidersModule,
    ChangeDetectionModule,
    QueriesModule,
    AnimationsModule,
    HostDecoratorModule
  ],
  declarations: [
    AppComponent,
    AppSectionComponent,
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
    PipesComponent,
    ProvidersComponent,
    TemplateComponent,
    TemplateUrlComponent,
    StylesComponent,
    StyleUrlsComponent,
    InterpolationComponent
  ],
  providers: [
    CalcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
