import { Router } from 'express';
import * as CategoryController from '../controllers/Category.controller';

const router = new Router();

// Get all Categories
router.route('/categories').get(CategoryController.getCategories);

export default router;
