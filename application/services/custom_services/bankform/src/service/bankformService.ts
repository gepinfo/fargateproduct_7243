import { Request, Response } from 'express';
import {bankformDao} from '../dao/bankformDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let bankform = new bankformDao();

export class bankformService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into bankformService.ts: GpGetAllValues')
     
     bankform.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from bankformService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into bankformService.ts: GpCreate')
     let  bankformData = req.body;
     bankform.GpCreate(bankformData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from bankformService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}