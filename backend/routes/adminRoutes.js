import express from 'express';
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllCommments, getDashboard } from '../controllers/adminController.js';
import auth from '../middlewares/auth.js';

const adminRouter = express.Router();

adminRouter.post('/login',adminLogin);
adminRouter.get('/comments',auth,getAllCommments);
adminRouter.get('/blogs',auth,getAllBlogsAdmin);
adminRouter.post('/delete-comment',auth,deleteCommentById);
adminRouter.post('/approve-comment',auth,approveCommentById);
adminRouter.get('/dashboard',auth,getDashboard);

export default adminRouter;