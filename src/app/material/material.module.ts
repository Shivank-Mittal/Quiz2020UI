import { NgModule } from '@angular/core';
import { MatButtonModule}  from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'



const MaterialComponents= [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatTabsModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule
]
@NgModule({
  imports: [
    MaterialComponents
  ]

  ,
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
