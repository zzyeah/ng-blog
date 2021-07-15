import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LrComponent } from './lr/lr.component';
import { TbComponent } from './tb/tb.component';


const LAYOUTCOMPONENTS = [LrComponent, TbComponent]
@NgModule({
  declarations: [
    ...LAYOUTCOMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...LAYOUTCOMPONENTS
  ]
})
export class LayoutModule { }
