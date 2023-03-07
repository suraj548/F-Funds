import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Donor } from 'src/app/donor';
import { DonorsService } from 'src/app/donors.service';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {

  donors: Array<Donor> | undefined
  public displayedColumns = ['Name', 'Address', 'Amount' ];
  public dataSource = new MatTableDataSource<Donor>();
  public sum:number=0
  constructor(public donorList:DonorsService) { }

  ngOnInit(): void {
    this.donorList.getDonors().subscribe((all)=>{
      var i:number=0
      this.donors=all
      this.dataSource.data=all
      console.log(all[0].name)
      for(i=0;i<all.length;i++){

        this.sum=this.sum+all[i].amount
      }
      console.log(this.sum)
    },error=>{      
      alert("Error fetching data please try again later!")
      console.log(error)
    }
  )
}

}
