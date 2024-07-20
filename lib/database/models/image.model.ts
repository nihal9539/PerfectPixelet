import { model, models, Schema } from "mongoose";
import { title } from "process";
export interface IImage extends Document {
  _id?: String | null;
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: String, required: true },
  width: { type: Number },
  height: { type: Number },
  config: {
    type: Object,
  },
  transformationUrl: {
    type: String,
  },
  aspectRation: {
    type: String,
  },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updateedAt: { type: Date, default: Date.now },
});

const ImageModel = models?.Image || model("Image", ImageSchema);
export default ImageModel;
