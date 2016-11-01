import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends React.Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e){
        console.log(e);
        this.props.createPost(e);
    }


    renderInput({ input, label, type, meta: { touched, invalid, error } }){
        return(
            <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
                <label>{label}</label>
                <input {...input} placeholder={label} type={type} className="form-control"/>
                {touched && error && <span>{error}</span>}
            </div>
        );
    }

    renderTextArea({ input, label, type, meta: { touched, invalid, error } }){
        return (
            <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
                <label>{label}</label>
                <textarea {...input} className="form-control"/>
                {touched && error && <span>{error}</span>}
            </div>
        );
    }

    renderSelectField({ input, label, type, meta: { touched, error }, children }){
        return(
            <div>
                <label>{label}</label>
                <div>
                    <select {...input}>
                        {children}
                    </select>
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        );
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

