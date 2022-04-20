import * as mongoose from 'mongoose';
import formstudentModel from '../models/formstudent';
import { CustomLogger } from '../config/Logger'


export class formstudentDao {
    private formstudent = formstudentModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into formstudentDao.ts: GpGetAllValues');

    

    
    
    
    this.formstudent.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from formstudentDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(formstudentData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into formstudentDao.ts: GpCreate');

    let temp = new formstudentModel(formstudentData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from formstudentDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}