import Axios from 'axios';
import HttpStatus from 'http-status-codes'
import Media from '../middleware/Media';
import middleware from '../middleware/middleware';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.use(middleware)

export const config = {
  api: {
    bodyParser: false,
  },
};

handler.post(async (req, res) => {
  try {
    const file = req.files;
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const data = {
      upload_preset: req.body.upload_preset,
      file: file.file.path,
    };

    const options = {
      // public_id: req.user._id,
      folder: 'kathekon_blog',
      transformation: []
    };

    const mediaUploader = new Media().init();

    await mediaUploader.v2.uploader.upload(file.file.path, options, async (error, result) => {
      if (error) {
        return res.status(HttpStatus.BAD_REQUEST).json({ success: 0, error: err.message })
      }

      return res.status(HttpStatus.OK).json({
        success: 1,
          file: {
            url: result.secure_url,
          },
      })
      
    });
    // const request = await Axios.post(url, data, { headers: { 'content-type': 'multipart/form-data' } });
    // console.log(request);
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message })
  }
})

export default handler;
// export default async function uploadHandler(req, res, next) {
//   await parseMultipartForm(req, res, next);
//   const { method } = req;
//   console.log(req.body);
//   switch (method) {
//     case 'GET':
//       // Get data from your database
//       res.status(200).json({ method })
//       break
//     case 'POST':
//       // Update or create data in your database
//       // const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
//       // const unsignedUploadPreset = 'klhmvqzf';
//       // const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
//       // const data = {
//       //   upload_preset: unsignedUploadPreset,
//       //   file,
//       // };
//       // const request = await Axios.post(url, data, {});
//       // console.log(request);
//       res.status(200).json({
//         success: 1,
//         file: 'https://res.cloudinary.com/cello/image/upload/v1604750304/suc10txqzeeqz5uet30r.jpg',
//       });
//       break;
//     default:
//       res.setHeader('Allow', ['GET', 'POST'])
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//   }
// }
