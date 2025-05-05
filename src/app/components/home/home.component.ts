import { Component } from '@angular/core';
import { UserTableComponent } from '../user-table/user-table.component';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-home',/*sector para usar el componente*/
  imports: [UserTableComponent],
  providers: [UserService],/*registra el servicio como proveedor*/
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  users: User[] = [];
  loading = true;

  constructor(private userService: UserService) {}
/*metodo donde obtiene los users desde el servicios y los asigna al array*/
  getUsers() { 
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
