import { Response, Request } from "express";
import Thumbnail from "../models/Thumbnail";

// Controllers to get all user thumbnails

export const getUsersThumbnails = async (res: Response, req: Request) => {
  try {
    const { userId } = req.session;
    const thumbnail = await Thumbnail.find({ userId }).sort({ createdAt: -1 });
    res.json({ thumbnail });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// controllers to get single thumbnail

export const getThumbnailbyId = async (res: Response, req: Request) => {
  try {
    const { userId } = req.session;
    const { id } = req.params;

    const thumbnail = await Thumbnail.findOne({ userId, _id: id });
    res.json({ thumbnail });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
