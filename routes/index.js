import { Router } from "express";
import { createPost } from "../controllers/create.js";
import { deletePost } from "../controllers/delete.js";
import { editPost } from "../controllers/edit.js";
import { getAllPosts, getPost, getTopPosts, searchPost } from "../controllers/getPost.js";
import { rent } from "../controllers/rent.js";
const router = Router();

router.get('/', (req, res) => {
    res.send("hello world");
});

router.get('/posts', (req, res) => {
    getAllPosts(req,res)
});

router.get('/topPosts', (req, res) => {
    getTopPosts(req,res)
});

router.post('/create', (req, res) => {
    createPost(req, res);
});

router.post('/search', (req, res) => {
    searchPost(req, res);
});

router.get('/details/:id', (req, res) => {
    getPost(req,res);
});

router.delete('/delete/:id', (req, res) => {
    deletePost(req,res);
});

router.put('/edit/:id', (req, res) => {
    editPost(req,res);
});

router.put('/rent/:id', (req, res) => {
    rent(req,res);
});

export default router