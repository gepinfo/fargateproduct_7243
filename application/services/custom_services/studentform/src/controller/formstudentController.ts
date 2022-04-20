import { Request, Response } from 'express';
import { formstudentService } from '../service/formstudentService';
import { CustomLogger } from '../config/Logger'
let formstudent = new formstudentService();

export class formstudentController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
formstudent.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formstudentController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formstudentController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
formstudent.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into formstudentController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from formstudentController.ts: GpCreate');
    })}


}