import Topic from '../models/topic';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all topics
 * @param req
 * @param res
 * @returns void
 */
export function getTopics(req, res) {
  Topic.find().sort('-created').exec((err, topics) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ topics });
  });
}

/**
 * Save a topic
 * @param req
 * @param res
 * @returns void
 */
export function addTopic(req, res) {
  if (!req.body.topic.name || !req.body.topic.wikiUrl || !req.body.topic.category) {
    res.status(403).end();
  }

  const newTopic = new Topic(req.body.topic);

  // Let's sanitize inputs
  newTopic.name = sanitizeHtml(newTopic.name);
  newTopic.wikiUrl = sanitizeHtml(newTopic.wikiUrl);

  newTopic.slug = slug(newTopic.title.toLowerCase(), { lowercase: true });
  newTopic.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ topic: saved });
  });
}

/**
 * Get a single topic
 * @param req
 * @param res
 * @returns void
 */
export function getTopic(req, res) {
  Topic.findOne({ _id: req.params.id }).exec((err, topic) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ topic });
  });
}

/**
 * Delete a topic
 * @param req
 * @param res
 * @returns void
 */
export function deleteTopic(req, res) {
  Topic.findOne({ _id: req.params.id }).exec((err, topic) => {
    if (err) {
      res.status(500).send(err);
    }

    topic.remove(() => {
      res.status(200).end();
    });
  });
}
