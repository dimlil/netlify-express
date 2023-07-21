import House from "../models/HouseModel.js"

export const checkRenter = async (req, res) => {
    try {
        const house = await House.findById(req.params.id).populate('rentedAHome');
        const userId = req.cookies['userId'];
        console.log(userId);
        console.log(house);
        const result = await house.rentedAHome.some(user => user._id.toHexString() === userId);
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error);
    }
}