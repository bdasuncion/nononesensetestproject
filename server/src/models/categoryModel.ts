import { Schema, model, connect, Document } from 'mongoose';

interface CategoryInterface extends Document{
    name: string;
  }

  const categorySchema = new Schema({
    name: { type: String, unique:true, required: true },
  });
  
  const CategoriesModel = model<CategoryInterface>('Categories', categorySchema);
  
  export default CategoriesModel;