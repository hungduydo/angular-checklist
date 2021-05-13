import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatInputModule,
    MatProgressBarModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' }]
})
export class CustomMaterialModule {}
