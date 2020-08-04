import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

const MATERIAL_COMPONENTS = [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
]

@NgModule({
    imports: [MATERIAL_COMPONENTS, CommonModule, FlexLayoutModule],
    exports: [MATERIAL_COMPONENTS, FlexLayoutModule]
})
export class MaterialModule {}