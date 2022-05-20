const Controller = require("../controllers/researchController");
const { authentication, authorAccess } = require("../middlewares/auth");
const researchRouter = require("express").Router();

researchRouter.post("/", authentication, Controller.postResearch); // Create
researchRouter.get("/", authentication, Controller.getAllResearch); // Read All
researchRouter.get("/:researchId", authentication, Controller.researchByPk); // Read ByPk

researchRouter.put("/:researchId", authentication, authorAccess, Controller.putResearch); // Update PUT (all)

researchRouter.patch("/:researchId", authentication, authorAccess, Controller.patchResearch); // Update PACTH (status)
researchRouter.delete("/:researchId", authentication, authorAccess, Controller.deleteResearch); // Delete

module.exports = researchRouter;
