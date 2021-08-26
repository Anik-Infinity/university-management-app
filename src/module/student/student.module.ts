import { Module } from "@nestjs/common";
import { StudentController } from "./student.controller";

@Module({
    imports:[StudentModule],
    controllers:[StudentController],
    providers:[]
})
export class StudentModule { }