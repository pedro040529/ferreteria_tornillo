import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    rol: { type: String, enum: ['admin', 'cliente'], default: 'cliente' },
  },
  { timestamps: true, collection: 'users' }
);

const User = models.User || model('User', userSchema);

export default User;
