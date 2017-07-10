import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
    imports: [
        FormsModule,
        HttpModule
    ],
    declarations: [HeaderComponent],
    exports: [
        FormsModule,
        HttpModule,
        HeaderComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
            ]
        };
    }
}