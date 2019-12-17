import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SimpleComponent } from './components/simple/simple.component';

export const animationsRoutes: Route[] = [
  {
    path: '',
    component: SimpleComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(animationsRoutes)],
  declarations: [SimpleComponent]
})
export class AnimationsModule {
}
