const asyncHandler = require('express-async-handler');
const path = require('path');

const uploadFeedPhoto = asyncHandler(async (req, res) => {
  const feedPhoto = req.files.photo;
  const photoPath = path.join(
    __dirname,
    '../public/images/' + `${feedPhoto.name}`
  );
  await feedPhoto.mv(photoPath);
  res.status(201).json({ photo: { src: `/images/${feedPhoto.name}` } });
});

module.exports = {
  uploadFeedPhoto,
};
