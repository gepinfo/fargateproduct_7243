import { Request, Response, NextFunction } from "express";
import { datacollegeController } from '../controller/datacollegeController';


export class Routes {
    private datacollege: datacollegeController = new datacollegeController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/datacollege').get(this.datacollege.GpGetAllValues);
app.route('/datacollege').post(this.datacollege.GpCreate);
     }

}