import { Request, Response } from 'express';
import { datacollegeService } from '../service/datacollegeService';
import { CustomLogger } from '../config/Logger'
let datacollege = new datacollegeService();

export class datacollegeController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
datacollege.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into datacollegeController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from datacollegeController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
datacollege.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into datacollegeController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from datacollegeController.ts: GpCreate');
    })}


}