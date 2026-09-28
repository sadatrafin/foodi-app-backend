const headerModel = require("../model/header.model")

exports.createHeaderController = async (req, res) => {
    const existingHeader = await headerModel.findOne();

    if (existingHeader) {
        return res.status(409).json({
            success: false,
            message: "Header already exists",
            data: existingHeader
        });
    }

    const headerData = await headerModel.create(req.body);
    return res.status(201).json({
        success: true,
        message: "Header created successfully",
        data: headerData
    });
};

exports.updateHeaderController = async (req, res) => {
    let { id } = req.params;
    const header = await headerModel.findOneAndUpdate({ _id: id }, req.body, { new: true });
    return res.status(200).json({
        success: true,
        message: "Header updated successfully",
        data: header
    });
};
exports.getHeaderController = async (req, res) => {
    let header = await headerModel.findOne();
    return res.status(200).json({
        success: true,
        message: "Header retrieved successfully",
        data: header
    });
};