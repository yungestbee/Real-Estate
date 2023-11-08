// const multer = require('multer');
// // const path = require('path');
// const multerS3 = require("multer-s3");
// const AWS = require('aws-sdk');
// require("aws-sdk/lib/maintenance_mode_message").suppress = true

// AWS.config.update({
//   accessKeyId: process.env.aws_access_key,
//   secretAccessKey: process.env.aws_secret
// })

// const s3 = new AWS.S3({params : {Bucket: process.env.aws_bucket_name}})


// const aws_upload = (params) => {

//   return new Promise((resolve, reject) => {
//     const { filename, file } = params;
//     const buf = Buffer.from(file.replace(/^data:.+;base64,/, " "), "base64")
//     const currentTime = new Date().getTime()
//     const data = {
//       key: `${filename}_${currentTime}`,
//       body: buf,
//       contentEncoding: 'base64',
//       ACL: 'public-read'
//     }
    
//     s3.putObject(data, (err, data) => {
//     if(err) {
//       console.log(`Error uploading file: ${err}`);
//       reject(err)
      
//     } else {
//       const url = data.location
//       resolve({url})
      
//       console.log(`File uploaded successfully. File location: ${data.location}`);
//     }
//   })
//   })

  
// }



// //   destination: (req, file, cb) => {
// //     cb(null, 'uploads/');
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
// //   }
// // });

// // const upload = multer({
//   // storage: storage,
// //   fileFilter: (req, file, cb) => {
// //     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
// //         cb(null, true);
// //     } else {
// //         cb(null, false);
// //         return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
// //     }
// // }

//   module.exports = aws_upload