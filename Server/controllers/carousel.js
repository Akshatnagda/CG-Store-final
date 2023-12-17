const Carousel = require('../models/carousel');

exports.create =  async (req, res) => {
    // console.log("hello");

    try {
        // console.log(req.body);
        const updatedCrousel = await Carousel.findOneAndUpdate({crousel_id: 'default_1'}, req.body, {new: true}).exec();
        // const updatedCrousel = await new Carousel(req.body).save();
        // const updatedCrousel = await Carousel.create(req.body);
        // console.log(updatedCrousel);
        res.json(updatedCrousel);
    } catch (err) {
        console.log(err);
        // return res.status(400).send('Update Product Failed');
        res.status(400).json({
            err: err.message,
        })
    }
}

exports.read =  async (req, res) => {
    const carouselImgs = await Carousel.find({}).exec();
    res.json(carouselImgs);
}
