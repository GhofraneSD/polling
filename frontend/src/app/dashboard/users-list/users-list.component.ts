import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import Swal from 'sweetalert2';
import { ClipboardNumbersService } from '../services/clipboard-numbers.service';


const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export interface TableItem {
  id: number;
  name: string;
  phone: number;
  type: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements AfterViewInit, OnInit {


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'phone', 'type', 'actions'];
  usersList!: User[];
  dataSource!: MatTableDataSource<User>;
  @ViewChild(MatSort) sort!: MatSort;
  isLoading = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private usersService: UsersService,
    private clipboardServices: ClipboardNumbersService) { }

  ngOnInit() {
    this.usersService.getUsers('').subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.isLoading = false;
    });
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addToClipboard(phone: number) {
    this.clipboardServices.addNumbers(phone);
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: "User added to clipboard",
      showConfirmButton: false,
      timer: 3000
    })
  }

  deleteUser() {
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'User account has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }



}
