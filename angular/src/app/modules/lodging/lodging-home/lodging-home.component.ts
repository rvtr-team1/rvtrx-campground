import { Component, OnInit } from '@angular/core';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Account } from '../../../data/account.model';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'uic-lodging-home',
  templateUrl: './lodging-home.component.html',
  styleUrls: ['./lodging-home.component.scss']
})
export class LodgingHomeComponent implements OnInit {

  lodgings: Lodging[] | null = null;
  account: Account | null = null;
  constructor(private lodgingService: LodgingService, private accountService: AccountService) { }

  ngOnInit(): void {
    
    this.lodgingService.get().subscribe(
      data => this.lodgings = data, error => this.handleError(error));
  }

  private handleError(error: HttpErrorResponse): void {
    console.log(error.status);
    let message: string;
    if (error.status === 0) {
      message = 'Unable to connect to server';
    } else {
      message = error.status.toString();
    }
  } 

}




