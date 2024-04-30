import { Component, OnInit } from '@angular/core';
import { CvComponent } from '../cv/cv.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private dialog: MatDialog){
    
  }
  previewCV(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    this.dialog.open(CvComponent, dialogConfig);
  }

}
