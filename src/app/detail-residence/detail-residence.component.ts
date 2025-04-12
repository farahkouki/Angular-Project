import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../core/models/Residence';
@Component({
  selector: 'app-detail-residence',
  templateUrl: './detail-residence.component.html',
  styleUrls: ['./detail-residence.component.css']
})
export class DetailResidenceComponent {
  id!:number
  residence !:Residence
    constructor(private act:ActivatedRoute,private rs:ResidenceService){}


    ngOnInit(){
        this.id=this.act.snapshot.params['id']
        this.rs.getResidenceById(this.id).subscribe(
          data => this.residence=data
        )

    }

    navigateToLocation(){
      window.open(`https://www.google.com/maps/place/${this.residence.address}`,'_blank')
    }

}
