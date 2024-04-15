import React, { Component } from 'react';
import { fetchMovie } from "../actions/movieActions";
import {connect} from 'react-redux';
import {Button,  Form} from 'react-bootstrap';
import {postReview} from "../actions/reviewActions";
import Rating from '@mui/material/Rating';

class Review extends Component {

    constructor(props){
        super(props);

        this.updateReview = this.updateReview.bind(this);
        this.updateRating = this.updateRating.bind(this);
        this.submitReview = this.submitReview.bind(this);
        this.state = {
            review: {
                review: '',
                rating: 3
            }
        };
    }


    updateReview(event){
        let updateDetails = Object.assign({}, this.state.review);

        updateDetails['review'] = event.target.value;
        this.setState({
            review: updateDetails
        });
    }

    updateRating(event){
        let updateDetails = Object.assign({}, this.state.review);

        updateDetails['rating'] = parseInt(event.target.value);
        this.setState({
            review: updateDetails
        });
    }

    submitReview(){
        const {dispatch} = this.props;
        let review = this.state.review;
        review.movieId = this.props.movieId;
        dispatch(postReview(review));
    }

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedMovie == null) {
            dispatch(fetchMovie(this.props.movieId));
        }
    }

    render() {

        if (!this.props.selectedMovie) {
            return <div>Loading...</div>
        }
        return (
            <Form className='form-horizontal'>
                <Form.Group controlId="review">
                    <Form.Label>Review</Form.Label>
                    <Form.Control key="review" onChange={this.updateReview} value={this.state.review.review} type="text" placeholder="Enter your review!" />
                </Form.Group>

                <Form.Group controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Rating onChange={this.updateRating} value={this.state.review.rating}/>
                    {/*
                        <Form.Control onChange={this.updateReview} value={this.state.details.rating}  type="range" placeholder="Password" />
                        */}
                </Form.Group>
                <Button onClick={this.submitReview}>Submit</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.movie.selectedMovie
    }
}

export default connect(mapStateToProps)(Review);

