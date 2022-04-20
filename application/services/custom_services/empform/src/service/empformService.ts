import { Request, Response } from 'express';
import {empformDao} from '../dao/empformDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let empform = new empformDao();

export class empformService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into empformService.ts: GpGetAllValues')
     
     empform.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from empformService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into empformService.ts: GpCreate')
     let  empformData = req.body;
     empform.GpCreate(empformData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from empformService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}