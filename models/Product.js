import { Schema, model, models } from 'mongoose';

const productSchema = new Schema(
  {
    codigo: {
      type: String,
      required: [true, 'El código es obligatorio'],
      unique: true,
    },
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
    },
    categoria: {
      type: String,
      required: [true, 'La categoría es obligatoria'],
    },
    descripcion: {
      type: String,
      required: [true, 'La descripción es obligatoria'],
    },
    precio: {
      type: Number,
      required: [true, 'El precio es obligatorio'],
      min: 0,
    },
    stock: {
      type: Number,
      required: [true, 'El stock es obligatorio'],
      min: 0,
      default: 0,
    },
    imagen: {
      type: String,
    },
    marca: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: 'ferreteria',
  }
);

const Product = models.Product || model('Product', productSchema);

export default Product;
