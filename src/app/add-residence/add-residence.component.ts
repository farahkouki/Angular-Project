import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  id!:number;
  residence!: Residence;
  residenceForm: FormGroup;

  constructor(private fb: FormBuilder, private rs: ResidenceService, private rt:Router,private act:ActivatedRoute) {
    this.residenceForm = this.fb.group({
      id: [{ value: this.generateId(), disabled: true }, Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      image: ['../../assets/images/f.jpg', Validators.required], // URL statique
      status: ['', Validators.required],
    });
  }
  generateId(): number {
    return Math.floor(Math.random() * 10000) + 1; // Génération d'un ID aléatoire
  }

  ngOnInit(){
    //1- récuperaton de l'id
    this.id=this.act.snapshot.params['id']
    //2- récuperation de l'objet residence
    this.rs.getResidenceById( this.id).subscribe(
        data =>{
          this.residence=data,
          //- remplir le formulaire avec l'objet récuperer
          this.residenceForm.patchValue(this.residence)
        }
    )
  } 

  save() {

    if (this.residenceForm.valid) {
      if (this.id){
        this.rs.updateResidence(this.residenceForm.value,this.id).subscribe(
          ()=> this.rt.navigateByUrl('/residence')
        )

      }else {
 // console.log('Residence data:', this.residenceForm.value);
      // this.rs.listResidences.push(this.residenceForm.value);
      // this.rt.navigate(['/residence']);
      this.rs.addResidence(this.residenceForm.value).subscribe({
        next:()=> this.rt.navigate(['/residence']),
        error: (err)=> console.log()
      }
     )
      }

    } else {
      console.log('Form is invalid');
    }
  }

}
