import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import GridFsStorage from "multer-gridfs-storage";
import Grid from "gridfs-stream"
import bodyParser from "body-parser";
import path from "path";
import Pusher from "pusher";


Grid.mongo = mongoose.mongo


const app = express();
const port = process.env.PORT || 9000

app.use(bodyParser.json())