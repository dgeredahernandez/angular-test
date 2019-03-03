import { Route } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { UserCreateComponent } from './component/users/user-create/user-create.component';
import { UserUpdateComponent } from './component/users/user-update/user-update.component';

export const routes: Route[] = [    
    {
        path: 'usuarios',
        component: UsersComponent
    },
    {
        path: 'nuevo-usuario',
        component: UserCreateComponent
    },
    {
        path: 'usuarios/:id',
        component: UserUpdateComponent
    },
    {
        path: '',
        redirectTo: 'usuarios',
        pathMatch: 'full'
    }
];