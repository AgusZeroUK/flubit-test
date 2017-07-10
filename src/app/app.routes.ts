import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';




@NgModule({
    imports: [
        RouterModule.forRoot([
                {path: '', redirectTo: '/account', pathMatch: 'full'},
                { path: 'account', loadChildren: './account/account.module#AccountModule' },

        ],
        {
                preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule { }