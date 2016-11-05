import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPost, deletePost} from '../actions/index';
import { Link, browserHistory } from 'react-router';

class PostsShow extends React.Component {
    constructor(props) {
        super(props);

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    componentWillMount(){
        this.props.getPost(this.props.params.id);
    }

    onDeleteClick(){
        this.props.deletePost(this.props.params.id)
            .then(() => {
                browserHistory.push("/");
            });
    }

    render() {

        const { post } = this.props;

        if(!post){
            return <div>Loading...</div>
        }

        return (
            <article>
                <Link to="/">Back to Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}
                >Delete Post</button>
                <h3>{ post.title }</h3>
                <h6>Categories: { post.categories }</h6>
                <p>{ post.content} </p>
            </article>
        );
    }
}

function mapStateToProps(state) {
    return {post: state.posts.post};
}

function mapDispatchToProps(dispath){
    return bindActionCreators({ getPost, deletePost }, dispath);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);