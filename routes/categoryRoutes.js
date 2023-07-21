import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { DeleteCategoryCOntroller, SingleCategoryController, categoryController, createCategoryController, updateCategoryController } from "../controllers/categoryController.js";


const router = express.Router();

//routes
// create category
router.post(
    "/create-category",
    requireSignIn,
    isAdmin,
    createCategoryController
  );

  //update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
  );

  //getAll category
  router.get('/get-category',categoryController);

  //single category
  router.get('/single-category/:slug',SingleCategoryController);

  //delete
  router.delete('/delete-category/:id',DeleteCategoryCOntroller);
  export default router;