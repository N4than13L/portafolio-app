import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"

import { InicioComponent } from "./components/inicio/inicio.component"
import { AplicacionesDeEscritorioComponent } from "./components/aplicaciones-de-escritorio/aplicaciones-de-escritorio.component"
import { MeritosComponent } from "./components/meritos/meritos.component"
import { AplicacionesDeTerminalComponent } from "./components/aplicaciones-de-terminal/aplicaciones-de-terminal.component"
import { AplicacionesWebComponent } from "./components/aplicaciones-web/aplicaciones-web.component"
import { ErrorComponent } from "./components/error/error.component"

const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'aplicaiones-web', component: AplicacionesWebComponent},
    {path: 'aplicaiones-de-escritorio', component: AplicacionesDeEscritorioComponent},
    {path: 'aplicaiones-de-terminal', component: AplicacionesDeTerminalComponent},
    {path: 'meritos', component: MeritosComponent},
    {path: '**', component: ErrorComponent}
]

export const approutingWithProviders: any[] = []
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes) 
