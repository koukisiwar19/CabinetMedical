import {Injectable, NotFoundException} from '@nestjs/common';
import {Patient} from "./entities/patient.entity";
import {AddPatientDto} from "./DTO/add-patient.dto";

@Injectable()
export class PatientService {
    patients: Patient[] = [];
    getPatients(): Patient[]{
        return this.patients;
    }
    addPatient(newPatient: AddPatientDto): Patient {
        const {nom, prenom, date_naissance, num_tel, adresse} = newPatient;
        let id;

        if (this.patients.length) {
            id = this.patients[this.patients.length - 1].id + 1;
        } else {
            console.log("hello")
            id = 1;
        }
        const patient = {
            id,
            nom,
            prenom,
            date_naissance,
            num_tel,
            adresse,
            createdAt: new Date()
        };
        this.patients.push(patient)
        return patient;

    }
    getPatientById(id : number):Patient
    {
        const patient = this.patients.find((actualPatient)=> actualPatient.id === +id);
        if(patient){
            return patient
        }throw new NotFoundException('le todo n existe pas')
    }
    deletePatient(id: number){
        let start= this.patients.find((actualPatient)=> actualPatient.id === +id)
        if (start){
            console.log('start='+start.id)
            this.patients.splice(start.id-1,1);
        } else {
            throw new NotFoundException('l id n existe pas')
        }
        return 'suppression partients'
    }
    updatePatient(id: number, newpatient: Partial<Patient>){

        const patient = this.getPatientById(id)
        patient.nom = newpatient.nom?newpatient.nom : patient.nom;
        patient.prenom = newpatient.prenom?newpatient.prenom : patient.prenom;
        patient.date_naissance = newpatient.date_naissance?newpatient.date_naissance : patient.date_naissance;
        patient.adresse = newpatient.adresse?newpatient.adresse : patient.adresse;

        console.log(id, ' ', patient)
        return patient
    }

}
