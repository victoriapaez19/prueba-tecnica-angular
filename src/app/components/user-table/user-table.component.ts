import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { User } from '../../interfaces/user.interface';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-table',
  imports: [
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    SelectModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
  standalone: true,
})
export class UserTableComponent {
  @Input() users: User[] = [];
  @Input() loading: boolean = true;
}
