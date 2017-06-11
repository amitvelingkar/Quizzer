import { Router } from 'express';
import * as CategoryController from '../controllers/category.controller';
const router = new Router();

// Get all Catgeories
router.route('/categories').get(CategoryController.getCatgeories);

// Get one category by id
router.route('/categories/:id').get(CategoryController.getCategory);

// Add a new Category
router.route('/categories').post(CategoryController.addCategory);

// Delete a category by id
router.route('/categories/:id').delete(CategoryController.deleteCategory);

export default router;
