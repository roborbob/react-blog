import React, { Component } from 'react';
import axios from '../../../axios'; 
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
// import { Redirect } from 'react-router-dom';
import styles from './Create.module.scss';

class Create extends Component {
    state = {
        articleElements: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Title',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1,
                },
                valid: false,
                touched: false
            },
            content: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Content',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1,
                },
                valid: false,
                touched: false
            },
            author: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Author',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        submitted: false
    }

    // componentDidMount () {
    //     console.log( this.props );
    // }

    articleDataHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.articleElements) {
            formData[formElementIdentifier] = this.state.articleElements[formElementIdentifier].value;
        }
        let currentTime = new Date();
        const data = {
            title: formData.title,
            content: formData.content,
            author: formData.author,
            time:  currentTime,
        };
        axios.post( '/library.json', data )
            .then( response => {
                this.props.history.replace('/library');
                this.setState( { submitted: true } );
            }) 
            .catch(error => {
                console.log("It didnt work");
                });
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        return isValid;
    }


    inputChangedHandler = (event, inputIdentifier) => {
        const updatedArticleForm = {
            ...this.state.articleElements
        };

        const updatedFormElement = {
            ...updatedArticleForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedArticleForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedArticleForm) {
            formIsValid = updatedArticleForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({articleElements: updatedArticleForm, formIsValid: formIsValid});
    }

    render () {
        const articleElementsArray = [];
        for (let key in this.state.articleElements) {
            articleElementsArray.push({
                id: key,
                config: this.state.articleElements[key],

            });
        }
        let form = (
            <form onSubmit={this.articleHandler}>
            {articleElementsArray.map(articleElement => (
                <Input
                    key={articleElement.id}
                    elementType={articleElement.config.elementType}
                    elementConfig={articleElement.config.elementConfig}
                    value={articleElement.config.value}
                    touched={articleElement.config.touched}
                    invalid={!articleElement.config.valid}
                    changed={(event) => this.inputChangedHandler(event, articleElement.id)}/>
            ))}
            <Button clicked={this.articleDataHandler}>Submit</Button>
            </form>
        );

        return (
            <div className={styles.Create}>
                <h1>Create new article</h1>
                {form}
            </div>
        );
    }
}

export default Create;