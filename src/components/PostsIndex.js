import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // Called the first time the component is loaded right before the component is added to the page
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                List of blog posts
            </div>
        );
    }
}

function mapDispatchToProps(dispath){
    return bindActionCreators({ fetchPosts }, dispath);
}

export default connect(null, mapDispatchToProps)(PostsIndex);