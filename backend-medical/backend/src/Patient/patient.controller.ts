import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    NotFoundException,
    Param,
    ParseIntPipe, Patch,
    Post,
    Put,
    Query, UseFilters
} from '@nestjs/common';
import { Patient } from './entities/patient.entity';
import {ExceptionHandler} from "@nestjs/core/errors/exception-handler";
import {GetPaginatedPatientsDto} from "./DTO/get-paginated-patients.dto";
import {AddPatientDto} from "./DTO/add-patient.dto";
import {PatientService} from "./patient.service";
import {ErrorHttpStatusCode} from "@nestjs/common/utils/http-error-by-code.util";
import {FlubErrorHandler} from "nestjs-flub/dist";
import {StatParamDto} from "./DTO/statParam.dto";
/*@UseFilters(new FlubErrorHandler())*/
@Controller('patients')
export class PatientController {
    constructor(private patientService: PatientService) {

    }

    @Get()
    async getPatients(
        @Query() mesQueryParams : GetPaginatedPatientsDto
    ):Promise<Patient[]>{
        console.log(mesQueryParams instanceof GetPaginatedPatientsDto)
        return await this.patientService.getPatients();
    }

    @Post()
    async addPatient(
        @Body() newPatient: AddPatientDto
    )
    {
        return this.patientService.addPatient(newPatient);

    }

    @Get('/error')
    throwError() {
        throw new Error('Very Bad Error');
    }
    @Delete('/remove:id')
    async removePatient(
        @Param('id', ParseIntPipe) id:number
    ) {
        return this.patientService.removePatient(id);
    }

    @Get('recover/:id')
    async recoverPatient(
        @Param('id', ParseIntPipe) id:number)
    {
        return await this.patientService.recoverPatient(id);
    }
    //Chercher le nombre de patients par sexe
    @Get('stats/sexe')
    async statPatientBySexe(){
        return this.patientService.statPatientBySexe();
    }
    @Get('stats/age/:min/:max')
    async statIntervalPatientByAge(
        //@Body() StatParam: StatParamDto
        @Param('min', ParseIntPipe) min,
        @Param('max', ParseIntPipe) max


    ){
        //console.log('Max = ', StatParam.max)
        return await this.patientService.statIntervalPatientByAge(max,min);
    }
    @Get('stats/age')
    async statPatientByAge(){
        return this.patientService.statPatientByAge();
    }


    @Get(':id')
    async getPatientById(
        @Param('id',new ParseIntPipe(
            {
                errorHttpStatusCode : HttpStatus.NOT_FOUND
            }
        )) id
    ):Promise<Patient>{
        return await this.patientService.getPatientById(id);

    }
    @Delete('/:id')
    async softremovepatient(
        @Param('id', ParseIntPipe) id
    ){
        return this.patientService.deletePatient(id);

    }

    @Patch('/:id')
    async putPatient(
        @Param('id', ParseIntPipe) id,
        @Body()  newpatient: Partial<Patient>
    ){
        return this.patientService.updatePatient(id, newpatient);
    }

}
