import * as mongoose from 'mongoose';
import datacollegeModel from '../models/datacollege';
import { CustomLogger } from '../config/Logger'


export class datacollegeDao {
    private datacollege = datacollegeModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into datacollegeDao.ts: GpGetAllValues');

    

    
    
    
    this.datacollege.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from datacollegeDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(datacollegeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into datacollegeDao.ts: GpCreate');

    let temp = new datacollegeModel(datacollegeData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from datacollegeDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}