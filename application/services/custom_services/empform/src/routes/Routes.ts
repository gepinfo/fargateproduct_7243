import { Request, Response, NextFunction } from "express";
import { empformController } from '../controller/empformController';


export class Routes {
    private empform: empformController = new empformController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/empform').get(this.empform.GpGetAllValues);
app.route('/empform').post(this.empform.GpCreate);
     }

}