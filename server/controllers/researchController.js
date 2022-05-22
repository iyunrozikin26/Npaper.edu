const { Research, Category, User, Profile } = require("../models");

class Controller {
    static async postResearch(req, res, next) {
        // console.log(req.body);
        try {
            const { title, abstract, status, year, location, CategoryId } = req.body;
            const userId = req.user.id;
            const newResearch = {
                title,
                abstract,
                year,
                document: req.file.filename,
                location,
                status,
                CategoryId,
                UserId: userId,
            };
            // console.log(newResearch);
            let createResearch = await Research.create(newResearch);
            if (!createResearch) throw { status: 400, message: "Bad Request" };
            res.status(201).json(createResearch);
        } catch (error) {
            console.log(error);
            res.status(error.status).json(error.message);
        }
    }

    static async getAllResearch(req, res, next) {
        try {
            // FILTER
            // PAGINATION
            const option = {
                include: [Category, { model: User, include: Profile }],
            };
            const getResearchAll = await Research.findAll(option);
            res.status(200).json(getResearchAll);
        } catch (error) {
            console.log(error);
        }
    }

    static async researchByPk(req, res, next) {
        try {
            const getResearch = await Research.findByPk(searchId);
            if (!getResearch) throw { status: 404, message: "Research Not Found" };
            res.status(200).json(getResearch);
        } catch (error) {
            res.status(error.status).json(error.message);
        }
    }

    static async putResearch(req, res, next) {
        try {
            const { searchId } = req.params;
            const getResearch = await Research.findByPk(searchId);
            if (!getResearch) throw { status: 404, message: "Research Not Found" };
            const updateResearch = await Research.update(req.body, {
                where: { id: searchId },
                returning: true,
            });
            res.status(200).json(updateResearch);
        } catch (error) {
            res.status(error.status).json(error.message);
        }
    }

    static async patchResearch(req, res, next) {
        try {
            const { searchId } = req.params;
            const getResearch = await Research.findByPk(searchId);
            if (!getResearch) throw { status: 404, message: "Research Not Found" };
            const updateResearch = await Research.update(
                { status: "uploaded" },
                {
                    where: { id: searchId },
                    returning: true,
                }
            );
            res.status(200).json(updateResearch);
        } catch (error) {
            res.status(error.status).json(error.message);
        }
    }

    static async deleteResearch(req, res, next) {
        try {
            const { searchId } = req.params;
            const getResearch = await Research.findByPk(searchId);
            if (!getResearch) throw { status: 404, message: "Research Not Found" };
            const toDelete = await Research.destroy({
                where: { id: searchId },
            });

            res.status(200).json({ message: `Research with ${searchId} success to delete` });
        } catch (error) {
            res.status(error.status).json(error.message);
        }
    }
}
module.exports = Controller;
