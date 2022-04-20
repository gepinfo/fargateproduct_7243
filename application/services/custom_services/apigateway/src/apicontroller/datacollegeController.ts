import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class datacollegeController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/datacollege', this.GpGetAllValues);
this.router.post('/datacollege', this.GpCreate);
    }

public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into datacollegeController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.COLLEGEFORMURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from datacollegeController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into datacollegeController.ts: GpCreate');
        new ApiAdapter().post(Constant.COLLEGEFORMURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from datacollegeController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }








}

