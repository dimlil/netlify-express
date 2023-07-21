import House from "../models/HouseModel.js"

export const rent = async (req, res) => {
    const house = await House.findById(req.params.id);

    try {
        await House.updateOne(
            { _id: req.params.id },
            { $set: { availablePieces: house.availablePieces - 1 }, $push: { rentedAHome: req.cookies['userId'] } }
        );
        res.status(200).json('Post Successfuly edited')
    } catch (error) {
        res.status(404).json(error.message);
    }
}