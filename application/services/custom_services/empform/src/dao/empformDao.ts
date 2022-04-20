import * as mongoose from 'mongoose';
import empformModel from '../models/empform';
import { CustomLogger } from '../config/Logger'


export class empformDao {
    private empform = empformModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into empformDao.ts: GpGetAllValues');

    

    
    
    
    this.empform.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from empformDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(empformData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into empformDao.ts: GpCreate');

    let temp = new empformModel(empformData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from empformDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}