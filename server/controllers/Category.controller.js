import Category from '../models/Category';

/**
 * Get all Categories
 * @param req
 * @param res
 * @returns void
 */
export function getCategories(req, res) {
  Category.find().sort('-created').exec((err, categories) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ categories });
  });
}