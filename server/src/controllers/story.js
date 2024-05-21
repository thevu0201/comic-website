import * as services from "../services/story"

export const getCardCarousel = async (req, res) => {
    try {
        const response = await services.getCardCarouselService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at story controller =>>> ", error
        })
    }
}