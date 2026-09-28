const bannerModel = require("../model/banner.model")

exports.createBannerController = async (req, res) => {
    try {
        const existingBanner = await bannerModel.findOne();

        if (existingBanner) {
            return res.status(409).json({
                success: false,
                message: "Banner already exists",
                data: existingBanner
            });
        }

        const bannerData = await bannerModel.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Banner created successfully",
            data: bannerData
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating banner",
            data: error.message
        });
    }
};

exports.updateBannerController = async (req, res) => {
    let { id } = req.params;
    const banner = await bannerModel.findOneAndUpdate({ _id: id }, req.body, { new: true });
    return res.status(200).json({
        success: true,
        message: "Banner updated successfully",
        data: banner
    });
};
exports.GetBannerController = async (req, res) => {
    let banner = await bannerModel.findOne();
    return res.status(200).json({
        success: true,
        message: "Banner retrieved successfully",
        data: banner
    });
};