import { Request, Response, NextFunction } from "express";
import { formstudentController } from '../controller/formstudentController';


export class Routes {
    private formstudent: formstudentController = new formstudentController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/formstudent').get(this.formstudent.GpGetAllValues);
app.route('/formstudent').post(this.formstudent.GpCreate);
     }

}