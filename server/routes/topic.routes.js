import { Router } from 'express';
import * as TopicController from '../controllers/topic.controller';
const router = new Router();

// Get all Topics
router.route('/topics').get(TopicController.getCatgeories);

// Get one topic by id
router.route('/topics/:id').get(TopicController.getTopic);

// Add a new Topic
router.route('/topics').post(TopicController.addTopic);

// Delete a topic by id
router.route('/topics/:id').delete(TopicController.deleteTopic);

export default router;
