import Category from '../models/category';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all categories
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

/**
 * Save a category
 * @param req
 * @param res
 * @returns void
 */
export function addCategory(req, res) {
  if (!req.body.category.name || !req.body.category.wikiUrl) {
    res.status(403).end();
  }

  const newCategory = new Category(req.body.category);

  // Let's sanitize inputs
  newCategory.name = sanitizeHtml(newCategory.name);
  newCategory.wikiUrl = sanitizeHtml(newCategory.wikiUrl);
  newCategory.selector = sanitizeHtml(newCategory.selector);

  newCategory.slug = slug(newCategory.title.toLowerCase(), { lowercase: true });
  newCategory.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ category: saved });
  });
}

/**
 * Get a single category
 * @param req
 * @param res
 * @returns void
 */
export function getCategory(req, res) {
  Category.findOne({ _id: req.params.id }).exec((err, category) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ category });
  });
}

/**
 * Delete a category
 * @param req
 * @param res
 * @returns void
 */
export function deleteCategory(req, res) {
  Category.findOne({ _id: req.params.id }).exec((err, category) => {
    if (err) {
      res.status(500).send(err);
    }

    category.remove(() => {
      res.status(200).end();
    });
  });
}
