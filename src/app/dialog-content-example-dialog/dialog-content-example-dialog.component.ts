import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/auth/api.service';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.scss']
})
export class DialogContentExampleDialogComponent implements OnInit {

  address_add: any = this.formBuilder.group({
    'Name': ['', [Validators.required]],
    'Address': ['', [Validators.required]],
    'Latitude': ['', [Validators.required]],
    'Longitude': ['', [Validators.required]]    
  });

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  addLocation(){
    this.apiService.test().subscribe((res) => {console.log(res);});
    console.log(this.address_add.value);
    this.apiService.post(`api/location`, this.address_add.value)
      .subscribe(
        (res)=>{
          console.log(res);
        }
      )
  }

  // this.apiService.post(`cities`, this.city_add.value)
  // .subscribe(
  //   (res) => {
  //     location.reload();
  //     //this.getCities();
  //     this.toastr.success('Erfolgreich aktualisiert!!');
  //   }, (err)=>{
  //     this.toastr.error('Fehler! Vorgang nicht möglich!');
  //   }
  // )

}
