import House from "../models/HouseModel.js"

export const getAllPosts = async (req, res) => {
    try {
        const houses = await House.find({});
        if (houses.length === 0) {
            throw 'Nothing found'
        }
        res.json(houses);
    } catch (error) {
        res.status(404).json({ error })
    }
}

export const searchPost = async (req, res) => {
    try {
        const houses = await House.find({type: req.body.search});
        if (houses.length === 0) {
            throw 'Nothing found'
        }
        res.json(houses);
    } catch (error) {
        res.status(404).json({ error })
    }
}

export const getTopPosts = async (req, res) => {
    try {
        const houses = await House.find({}).sort({ createdAt: 'desc' }).limit(3);
        if (houses.length === 0) {
            throw 'Nothing found'
        }
        res.json(houses);
    } catch (error) {
        res.status(404).json({ error })
    }
}

export const getPost = async (req, res) => {
    try {
        const house = await House.findById(req.params.id).populate('rentedAHome');
        const isLoggedIn = req.cookies['userId'] ? true : false;
        const isOwner = house.Owner._id.toHexString() === req.cookies['userId'];
        res.status(200).json({ house, isLoggedIn, isOwner, });
    } catch (error) {
        res.status(404).json(error.message);
    }
}