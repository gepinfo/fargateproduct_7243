
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const bankformSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   bankac: String
})

const bankformModel = mongoose.model('bankform', bankformSchema, 'bankform');
export default bankformModel;
