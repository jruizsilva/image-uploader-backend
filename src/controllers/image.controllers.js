import cloudinary from "../libs/cloudinary";
import Image from "../models/Image";

const uploadImage = async (req, res) => {
  const imageToUpload = req.body.image;
  try {
    const uploadedResponse = await cloudinary.uploader.upload(imageToUpload, {
      upload_preset: process.env.CLOUDINARY_PRESET,
    });
    const imageAdded = await Image.create({
      url: uploadedResponse.url,
      public_id: uploadedResponse.public_id,
    });
    res.json({ data: imageAdded, msg: "Image upload successfully" });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Something went wrong" });
  }
};

export default { uploadImage };
