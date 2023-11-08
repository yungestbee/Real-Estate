const http = require('http-status-codes');
const property = require('../models/propertySchema');
const AWS = require('aws-sdk');

const addProperty = async (req, res) => {
    const value = req.body;
    const myBucket = process.env.aws_bucket_name;
    console.log(req.files.file)
    console.log(process.env.aws_access_key, process.env.aws_secret)

    AWS.config.update({
        accessKeyId: process.env.aws_access_key,
        secretAccessKey: process.env.aws_secret,
    });

    const s3 = new AWS.S3();
    if (!req.files.file) {
        return res.status(http.StatusCodes.BAD_REQUEST).json({ message: "File upload is required." });
    }

    console.log(req.files.file.data)

    const fileContent = req.files.file.data;
    const currentTime = new Date().getTime()
    const params = {
        Bucket: myBucket,
        Key: `site/property_${currentTime}`,
        Body: fileContent,
    };

    s3.upload(params, function (err, data) {
        if (err) {
            console.error(err);
            return res.status(http.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Failed to upload file to S3." });
        }
        console.log(data);

        value['status'] = "available";
        value['image'] = data.Location; 

        console.log(value);
          property.create(value)
            .then((registration) => {
                console.log(registration);
                return res.status(http.StatusCodes.CREATED).json({ message: "Property successfully added" });
            })
            .catch((error) => {
                console.error(error.message);
                return res.status(http.StatusCodes.BAD_REQUEST).json({ message: error.message });
            });
    });
};

module.exports = addProperty;
