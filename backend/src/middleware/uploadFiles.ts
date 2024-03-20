import { Request, Response } from "express";
import multer, { Multer } from "multer";
import path from "path";
import { v4 as uuidv4 } from 'uuid';

const UPLOAD_FOLDER = path.join(__dirname, '../public/uploads');
const ALLOWED_EXTENSIONS = new Set(["mp4", "avi", "mov", "mkv", "png"]);

const storage = multer.diskStorage({
  destination : (req : Request, file : Express.Multer.File, cb) => {
    cb(null, UPLOAD_FOLDER);
  },
  filename: (req : Request, file : Express.Multer.File, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`)
  }
});

const upload = multer({storage : storage})

export const allowedFile = (filename : string) => {
  const ext = path.extname(filename).toLowerCase().substr(1);
  return ALLOWED_EXTENSIONS.has(ext);
};

export const uploadMiddleware = upload.array('videos')
