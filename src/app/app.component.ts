import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './../services/auth/api.service';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RoamlerTest';
  res: any;
  position: any;
  
  constructor(private apiService: ApiService, public dialog: MatDialog) {

  }

  ngOnInit(){
    this.getLocations();
    this.getGeoLocation();

  }

  getLocations(){
    this.apiService.get(`api/location`)
    .subscribe(
      (res)=> {
        console.log(res)
        this.res = res;
        console.log(this.res);
      }
    )
  }

  editLocation(item: any){
    item.latitude = this.position.coords.latitude.toString();
    item.longitude = this.position.coords.longitude.toString();
    this.apiService.put(`api/location`, item)
      .subscribe(
        (res) => {
          this.getLocations();
        }
      )
  }

  deleteLocation(name: any){
    console.log(name)
    this.apiService.delete(`api/location/${name}`)
      .subscribe(
        (res)=>{
          this.getLocations();
        }
      )
  }

  getGeoLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          this.position = position;
          console.log(this.position)
        }
      },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
