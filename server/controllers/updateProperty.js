const util = require('util');
const property = require('../models/propertySchema');
const AWS = require('aws-sdk');
const http = require('http-status-codes')

const updateProperty = async (req, res) => {
  const value = req.body;
  const myBucket = process.env.aws_bucket_name;
  console.log(req.files.file)

  AWS.config.update({
    accessKeyId: process.env.aws_access_key,
    secretAccessKey: process.env.aws_secret,
  });

  const s3 = new AWS.S3();

  if (!req.files.file) {
    return res.status(http.StatusCodes.BAD_REQUEST).json({ message: "File upload is required." });
  }

  const fileContent = req.files.file.data;
  const currentTime = new Date().getTime();

  const params = {
    Bucket: myBucket,
    Key: `site/property_${currentTime}`,
    Body: fileContent,
  };

  try {
    const data = await util.promisify(s3.upload.bind(s3))(params);
    console.log(data);

    const id = req.params.id;
    value['image'] = data.Location;
    

    try {
      const propertyy = await property.findById(id);
      if (!propertyy) return res.status(http.StatusCodes.BAD_REQUEST).json({ message: "Couldn't fetch property" });
      console.log(propertyy);

      try {
        const update = await property.updateOne({ _id: id }, { $set: value });
        if (!update) return res.status(http.StatusCodes.BAD_REQUEST).json({ message: "Couldn't update property" });
      } catch (error) {
        console.log(error.message);
        return res.status(http.StatusCodes.BAD_REQUEST).json({ message: error.message });
      }
      return res.status(http.StatusCodes.OK).json({ message: "Property updated successfully" });

    } catch (error) {
      console.log(error.message);
      return res.status(http.StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    return res.status(http.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Failed to upload file to S3." });
  }
};

module.exports = updateProperty;
