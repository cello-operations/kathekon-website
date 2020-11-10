import cloudinary from 'cloudinary';

class Media {
  constructor() {
    this.cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    this.apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
    this.apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;
  }

  init() {
    cloudinary.config({
      cloud_name: this.cloudName,
      api_key: this.apiKey,
      api_secret: this.apiSecret,
    });

    return cloudinary;
  }
}

export default Media;