import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query} from '@nestjs/common';
import { Patient } from './Models/patient';
import {ExceptionHandler} from "@nestjs/core/errors/exception-handler";
import {GetPaginatedPatientsDto} from "./DTO/get-paginated-patients.dto";
import {AddPatientDto} from "./DTO/add-patient.dto";

@Controller('patients')
export class PatientController {
    constructor() {
        this.patients= [];
    }
    patients: Patient [];
    @Get()
    getPatients(
        @Query() mesQueryParams : GetPaginatedPatientsDto
    ){
        console.log('Patients')
        return this.patients;
    }
    @Get('/:id')
    getPatientById(
        @Param('id') params
    ){
        const patient = this.patients.find((actualPatient)=> actualPatient.id === +params);
        if(patient){
            return patient
        }throw new NotFoundException('le todo n existe pas')

    }

    @Put('/:id')
    putPatient(
        @Param('id') id,
        @Body()  newpatient: Partial<Patient>
    ){
        const patient = this.getPatientById(id)
        patient.nom = newpatient.nom?newpatient.nom : patient.nom;
        patient.prenom = newpatient.prenom?newpatient.prenom : patient.prenom;
        patient.date_naissance = newpatient.date_naissance?newpatient.date_naissance : patient.date_naissance;
        patient.adresse = newpatient.adresse?newpatient.adresse : patient.adresse;

        console.log(id, ' ', patient)
        return patient
    }
    @Post()
    postPatients(
        @Body() newPatient: AddPatientDto
    ){
        const patient = new Patient;
        const {nom, prenom, date_naissance, num_tel, adresse} = newPatient;
        patient.nom=nom;
        patient.prenom=prenom;
        patient.date_naissance = date_naissance;
        patient.num_tel = num_tel;
        patient.adresse = adresse
        if (this.patients.length){
            patient.id = this.patients[this.patients.length-1].id + 1;
            console.log(this.patients.length)
        }else
            patient.id= 1;
        this.patients.push(patient);
        console.log(patient)
        return 'ajout partients'
    }
    @Delete('/:id')
    deletePatients(
        @Param('id') id
    ){
        console.log({id})

        let start= this.patients.find((actualPatient)=> actualPatient.id === +id)
        if (start){
            console.log('start='+start.id)
            this.patients.splice(start.id-1,1);
        } else {
            throw new NotFoundException('l id n existe pas')
        }
        return 'suppression partients'
    }
}
