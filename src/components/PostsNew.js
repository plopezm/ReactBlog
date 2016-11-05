import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import { createPost } from '../actions/index';

class PostsNew extends React.Component {

    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    renderInput({ input, label, type, meta: { touched, invalid, error } }){
        return(
            <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
                <label>{label}</label>
                <input {...input} placeholder={label} type={type} className="form-control"/>
                {touched && error && <span className="danger-text">{error}</span>}
            </div>
        );
    }

    renderTextArea({ input, label, type, meta: { touched, invalid, error } }){
        return (
            <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
                <label>{label}</label>
                <textarea {...input} className="form-control"/>
                {touched && error && <span className="danger-text">{error}</span>}
            </div>
        );
    }

    renderSelectField({ input, label, type, meta: { touched, error }, children }){
        return(
            <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
                <label>{label}</label>l
                <div>
                    <select {...input}>
                        {children}
                    </select>
                    {touched && error && <span className="danger-text">{error}</span>}
                </div>
            </div>
        );
    }

    onFormSubmit(props){
        this.props.createPost(props)
            .then(() => {
                browserHistory.push('/');
            });
    }

    render() {
        // const handleSubmit = this.props.handleSubmit;
        // const title = this.props.fields.title;
        const { handleSubmit, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <h3>Create a new post</h3>

                <Field name="title" component={this.renderInput} type="text" label="Title"/>

                <Field name="categories" component={this.renderInput} type="text" label="Categories"/>

                <Field name="content" component={this.renderTextArea} label="Content"/>

                <button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function mapDispatchToProps(dispath){
    return bindActionCreators({ createPost }, dispath);
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = "Enter a Title";
    }

    if(!values.categories){
        errors.categories = "Enter a category";
    }

    if(!values.content){
        errors.content = "Enter a content";
    }

    return errors;
}

PostsNew = reduxForm({
    form: 'PostsNewForm',
    validate
})(PostsNew);

//connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
export default PostsNew = connect(null, mapDispatchToProps)(PostsNew);

