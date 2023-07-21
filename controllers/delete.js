import House from "../models/HouseModel.js"

export const deletePost = async (req, res) => {
    try {
        await House.deleteOne({ _id: req.params.id });
        res.status(200).json('Post Successfuly deleted');
    } catch (error) {
        res.status(404).json(error.message);
    }
}