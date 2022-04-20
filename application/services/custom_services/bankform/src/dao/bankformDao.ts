import * as mongoose from 'mongoose';
import bankformModel from '../models/bankform';
import { CustomLogger } from '../config/Logger'


export class bankformDao {
    private bankform = bankformModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into bankformDao.ts: GpGetAllValues');

    

    
    
    
    this.bankform.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from bankformDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(bankformData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into bankformDao.ts: GpCreate');

    let temp = new bankformModel(bankformData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from bankformDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}