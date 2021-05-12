import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query
} from '@nestjs/common';
import { Patient } from './Models/patient';
import {ExceptionHandler} from "@nestjs/core/errors/exception-handler";
import {GetPaginatedPatientsDto} from "./DTO/get-paginated-patients.dto";
import {AddPatientDto} from "./DTO/add-patient.dto";
import {PatientService} from "./patient.service";
import {ErrorHttpStatusCode} from "@nestjs/common/utils/http-error-by-code.util";

@Controller('patients')
export class PatientController {
    constructor(private patientService: PatientService) {

    }

    @Get()
    getPatients(
        @Query() mesQueryParams : GetPaginatedPatientsDto
    ){
        console.log('Patients')
        return this.patientService.getPatients();
    }
    @Get('/:id')
    getPatientById(
        @Param('id', new ParseIntPipe(
            {
                errorHttpStatusCode : HttpStatus.NOT_FOUND
            }
        )) id
    ){
        return this.patientService.getPatientById(id);

    }

    @Put('/:id')
    putPatient(
        @Param('id', ParseIntPipe) id,
        @Body()  newpatient: Partial<Patient>
    ){
        return this.patientService.updatePatient(id, newpatient);
    }
    @Post()
    addPatient(
        @Body() newPatient: AddPatientDto
    ): Patient
    {
        return this.patientService.addPatient(newPatient);

    }
    @Delete('/:id')
    deletePatients(
        @Param('id', ParseIntPipe) id
    ){
        console.log(ParseIntPipe)
        return this.patientService.deletePatient(id);


    }
}
