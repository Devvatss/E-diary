import axios from 'axios';

const url= 'https://e-diary-back.herokuapp.com/posts';
export const fetchPosts = () => axios.get(url);
// console.log(fetchPosts);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`,updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);