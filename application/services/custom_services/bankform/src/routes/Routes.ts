import { Request, Response, NextFunction } from "express";
import { bankformController } from '../controller/bankformController';


export class Routes {
    private bankform: bankformController = new bankformController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/bankform').get(this.bankform.GpGetAllValues);
app.route('/bankform').post(this.bankform.GpCreate);
     }

}