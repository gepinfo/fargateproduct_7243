import { Request, Response } from 'express';
import {datacollegeDao} from '../dao/datacollegeDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let datacollege = new datacollegeDao();

export class datacollegeService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into datacollegeService.ts: GpGetAllValues')
     
     datacollege.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from datacollegeService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into datacollegeService.ts: GpCreate')
     let  datacollegeData = req.body;
     datacollege.GpCreate(datacollegeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from datacollegeService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}