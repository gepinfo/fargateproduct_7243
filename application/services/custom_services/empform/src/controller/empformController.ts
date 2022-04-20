import { Request, Response } from 'express';
import { empformService } from '../service/empformService';
import { CustomLogger } from '../config/Logger'
let empform = new empformService();

export class empformController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
empform.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into empformController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from empformController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
empform.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into empformController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from empformController.ts: GpCreate');
    })}


}