import House from "../models/HouseModel.js"

export const editPost = async (req, res) => {
    const { name, type, year, city, imgUrl, propertyDescription, availablePieces } = req.body;
    const convYear = Number(year);
    const convPieces = Number(availablePieces);
    try {
        await House.updateOne(
            { _id: req.params.id },
            { $set: { name, type, year: convYear, city, imgUrl, propertyDescription, availablePieces: convPieces } }
        );
        res.status(200).json('Post Successfuly edited')
    } catch (error) {
        res.status(404).json(error.message);
    }

}