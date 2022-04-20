import { Request, Response } from 'express';
import {formstudentDao} from '../dao/formstudentDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let formstudent = new formstudentDao();

export class formstudentService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into formstudentService.ts: GpGetAllValues')
     
     formstudent.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from formstudentService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into formstudentService.ts: GpCreate')
     let  formstudentData = req.body;
     formstudent.GpCreate(formstudentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from formstudentService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}