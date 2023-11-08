// const multer = require('multer');
// // const path = require('path');
// const multerS3 = require("multer-s3");
// const AWS = require('aws-sdk');
// require("aws-sdk/lib/maintenance_mode_message").suppress = true

// AWS.config.update({
//   accessKeyId: process.env.aws_access_key,
//   secretAccessKey: process.env.aws_secret
// })

// const s3 = new AWS.S3();
// const myBucket = process.env.aws_bucket_name;

// const upload = multer({
//   storage : multerS3({
//     s3: s3,
//     bucket: myBucket,
//     acl: "public-read",
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     key: function (req, file, cb) {
//       cb(null, file.originalname);
//     }
//   })
// })

// module.exports = upload


const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.aws_access_key,
  secretAccessKey: process.env.aws_secret,
});

const s3 = new AWS.S3();
const myBucket = process.env.aws_bucket_name;

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: myBucket,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

module.exports = upload;
