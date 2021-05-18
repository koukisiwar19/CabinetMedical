import {Injectable, NotFoundException} from '@nestjs/common';
import {Patient} from "./entities/patient.entity";
import {AddPatientDto} from "./DTO/add-patient.dto";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {updatePatientDto} from "./DTO/update-patient.dto";
import {count} from "rxjs/operators";

@Injectable()
export class PatientService {
    constructor(
        @InjectRepository(Patient)
        private  patientRepository: Repository<Patient>
    ) {
    }
    patients: Patient[] = [];
    async getPatients(): Promise<Patient[]>{
        return await this.patientRepository.find();
    }
    async addPatient(newPatient: AddPatientDto): Promise<Patient> {

        return  await this.patientRepository.save(newPatient);

    }
    async getPatientById(id : number) {
        const patient = await this.patientRepository.findOne(id);
        if(! patient) {
            throw new NotFoundException(`Le patient d'id ${id} n'existe pas`);
        }
        return patient

    }
    async removePatient(id: number)
    {
        const temp= await this.getPatientById(id)
            return await this.patientRepository.remove(temp);
    }

    async deletePatient(id: number)
    {
        const temp= await this.getPatientById(id)
        return await this.patientRepository.softRemove(temp);
    }

    async updatePatient(id: number, patient: Partial<Patient>): Promise<Patient> {
        const newPatient= await this.patientRepository.preload({
            id,
            ...patient
        })
        if (newPatient){
           return  await this.patientRepository.save(newPatient);

        }else {
            throw new NotFoundException('l id n existe pas')
        }


    }
    async recoverPatient(id: number)
    {
        return await this.patientRepository.restore(id);
    }
    //Chercher le nombre de patients par sexe
    async statPatientBySexe()
    {
        //créer un query builder
        const qb =this.patientRepository.createQueryBuilder("patient");
        qb.select("patient.sexe, count(patient.id) as nombrePatients")
            .groupBy("patient.sexe")
            console.log(qb.getSql())
            return await qb.getRawMany();
    }
    async statPatientByAge()
    {
        //créer un query builder
        const qb =this.patientRepository.createQueryBuilder("patient");
        qb.select("(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())-TO_DAYS(patient.date_naissance)), '%Y')+0) as age, count(patient.id) as nombrePatients")
            .groupBy("age")
        console.log(qb.getSql())
        return await qb.getRawMany();
    }
    async statIntervalPatientByAge(maxAge,minAge)
    {
        //créer un query builder
        const qb =this.patientRepository.createQueryBuilder("patient");
        qb.select("(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())-TO_DAYS(patient.date_naissance)), '%Y')+0) as age, count(patient.id) as nombrePatients")
            .where("(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())-TO_DAYS(patient.date_naissance)), '%Y')+0) >=:minAge and (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())-TO_DAYS(patient.date_naissance)), '%Y')+0) <:maxAge")
            .setParameters({maxAge: maxAge, minAge: minAge})
            .groupBy("age")
        console.log(qb.getSql())
        return await qb.getRawMany();
    }

}
