
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const empformSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   empid: String
})

const empformModel = mongoose.model('empform', empformSchema, 'empform');
export default empformModel;
