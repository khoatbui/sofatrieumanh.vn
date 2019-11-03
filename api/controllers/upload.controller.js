module.exports.uploadMultiImages = (req, res, next) => {
  try {
    console.log(req.files)
    const file = req.files
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    } else {
      const returnImages = []
      file.forEach(function(element) {
        returnImages.push({
          fileName: element.filename,
          path: element.path.replace(new RegExp('\\\\', 'g'), '/'),
          size: element.size
        })
      })
      res.status(200).json(returnImages)
    }
  } catch (error) {
    console.log(error)
  }
}
