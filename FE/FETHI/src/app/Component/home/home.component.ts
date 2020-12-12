import { Component, OnInit } from '@angular/core';
import { AdminService } from '@Service/admin.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public Product: string = "a";
  constructor(private AdminService: AdminService) { 
    AdminService.getData().subscribe((data:any)=>this.Product=data);
  }

  ngOnInit(): void {
    //this.AdminService.getData().subscribe(data => {
    //  console.log(data);
    //  this.Product = data.toString();
    //});
  }

}
