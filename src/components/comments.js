import React, {useEffect, useState} from 'react';
import './comments.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Close} from "@mui/icons-material";
import {Avatar, Grid} from "@mui/material";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments, postComment} from "../actions/commentActions";

// this name to color converter is borrowed from the MUI documentation
// https://mui.com/material-ui/react-avatar/
function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name, sx) {
    return {
        sx: {
            bgcolor: stringToColor(name),
            ...sx
        },
        children: `${name.charAt(0)}`,
    };
}

const Comments = ({commentsEnabled, enableComments, videoId}) => {

    const comments = useSelector(state => state.comment.comments[videoId] ? state.comment.comments[videoId] : []);
    const dispatch = useDispatch();
    let [newComment, setNewComment] = useState("");

    useEffect(() => {
        dispatch(fetchComments(videoId))
    }, [])

    const submitComment = () => {
        dispatch(postComment({text: newComment, videoId: videoId}));
    }

    console.log("rerender comments");

    return (
        <div className={commentsEnabled ? "comment enable" : "comment"}>

            <Card sx={{width: "100%", overflowY: "scroll", overflowX: "hidden"}}>
                <Close fontSize="large" sx={{position:"absolute", right: "20px"}} onClick={e => {enableComments(false); console.log("close comments", e)}}/>
                <Card sx={{marginTop: "30px"}}>
                    <CardContent>
                        <Form className='form-horizontal'>
                            <Form.Group controlId="comment">
                                <Form.Control key="comment" onChange={e => setNewComment(e.target.value)} value={newComment} type="text" placeholder="What's on your mind?" />
                            </Form.Group>
                            <Button onClick={submitComment}>Submit</Button>
                        </Form>
                    </CardContent>
                </Card>
                <Card sx={{marginTop: "10px"}}>
                    {comments.map((comment) =>
                        <Grid container sx={{marginLeft: "0px"}} spacing={2} key={"comment" + comment._id}>
                            <Grid item xs={1}>
                                <Avatar {...stringAvatar(comment.username, {marginTop: "5px !important"})}>{comment.username.charAt(0)}</Avatar>
                            </Grid>
                            <Grid item xs={11}>
                                <Card>
                                    <CardContent sx={{paddingTop: "5px !important", paddingBottom: "5px !important"}}>
                                        <Typography component="div" variant="caption">
                                            <b>{comment.username}</b>
                                        </Typography>
                                        <Typography component="div" variant="subtitle1">
                                            {comment.text}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    )}
                </Card>
            </Card>
        </div>
    )
}

export default Comments;

