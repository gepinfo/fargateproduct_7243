import { Request, Response } from 'express';
import { bankformService } from '../service/bankformService';
import { CustomLogger } from '../config/Logger'
let bankform = new bankformService();

export class bankformController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
bankform.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into bankformController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from bankformController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
bankform.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into bankformController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from bankformController.ts: GpCreate');
    })}


}