import React, { Component } from 'react';
import './CreatePost.css';

import Blog from "../../components/CreatePost/Blog/Blog";
import Review from "../../components/CreatePost/Review/Review";
import Walkthrough from "../../components/CreatePost/Walkthrough/Walkthrough";


class CreatePost extends Component {

  state = {
    walkthrough: false,
    review: false,
    blog: false
  }

  renderWalkthrough = () => {
    this.setState({ walkthrough: true, review: false, blog: false });
    console.log(this.state);
  };

  renderReview = () => {
    this.setState({ walkthrough: false, review: true, blog: false });
    console.log(this.state);
  };

  renderBlog = () => {
    this.setState({ walkthrough: false, review: false, blog: true });
    console.log(this.state);
  };



  render() {
    return (
      <div className="container-fluid">

        <div className="container createPost">
          <div className="row justify-content-center">
            <h1>Create a Post</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <h6>What type of post will you be making?</h6>
              <button className="categorySelect" onClick={this.renderWalkthrough}>Walkthrough</button>
              <button className="categorySelect" onClick={this.renderReview}>Review</button>
              <button className="categorySelect" onClick={this.renderBlog}>Blog</button>
            </div>
          </div>
        </div>

        {this.state.walkthrough ? < Walkthrough /> : this.state.review ? < Review /> : this.state.blog ? < Blog /> : null}

      </div>
    );
  }
}

export default CreatePost;