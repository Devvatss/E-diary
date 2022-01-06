import React,{useEffect, useState} from "react";
import axios from "axios";
import {Grid, CircularProgress} from '@material-ui/core';
import Post from "./Post/Post";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { getPosts } from "../../actions/posts";

const Posts = ( {setCurrentId} ) => {
const posts = useSelector((state) => state.posts);
// const [posts,setposts]=useState([]);
const classes = useStyles();

const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]); 
    return (
           !posts.length ? <CircularProgress/>: (
               <Grid className= {classes.container} container alignItems="stretch" spacing={3}> 
               { posts.map((post) => (
                   <Grid key={post._id} item xs={12} sm={6}>
                       <Post post={ post } setCurrentId={ setCurrentId }/>
                   </Grid>

               )) }

               </Grid>
           )
        
    );
}
export default Posts;