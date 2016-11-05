import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts, deletePost } from '../actions/index';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PostsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.onRemovePost = this.onRemovePost.bind(this);
    }

    componentWillMount() {
        // Called the first time the component is loaded right before the component is added to the page
        this.props.fetchPosts();
    }

    onRemovePost(id){
        this.props.deletePost(id);
    }

    renderPosts(){
        return Object.keys(this.props.posts).map((id) => {
            const post = this.props.posts[id];
            return (
                    <li className="list-group-item" key={post.id}>
                        <div className="flex-container">
                            <Link to={ "posts/"+ post.id } className="flex-li-link flex-container">
                                <div className="flex-li-title"><strong>{post.title}</strong></div>
                                <div className="flex-li-category">
                                    {post.categories}
                                </div>
                            </Link>
                            <button
                                className="btn btn-danger flex-li-button"
                                onClick={() => this.onRemovePost(post.id)}
                            >x</button>
                        </div>
                    </li>
            );
        })
    }

    render() {
        const transitionOptions = {
            transitionName: "fade",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
        };

        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    <ReactCSSTransitionGroup {...transitionOptions}>
                        { this.renderPosts() }
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

function mapDispatchToProps(dispath){
    return bindActionCreators({ fetchPosts, deletePost }, dispath);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);