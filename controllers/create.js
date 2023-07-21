// import User from '../models/AuthModel.js'
import House from '../models/HouseModel.js'

export const createPost = (req, res) => {
    const { name, type, year, city, imgUrl, propertyDescription, availablePieces } = req.body;
    const convYear = Number(year);
    const convPieces = Number(availablePieces);
    const house = new House({
        name,
        type,
        year: convYear,
        city,
        imgUrl,
        propertyDescription,
        availablePieces: convPieces,
        rentedAHome: [],
        Owner: req.cookies['userId']
    });
    try {
        house.save();
        return res.status(200).send('Successfuly created post');
    } catch (e) {
        console.log(e);
        return res.status(401).json({
            'error': e
        });
    }
}