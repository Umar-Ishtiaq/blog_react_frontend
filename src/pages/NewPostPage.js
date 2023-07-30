import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Form, Button, Container} from 'react-bootstrap';

const NewPostPage = () => {

    //Empty at the start
    const [post, setPost] = useState({
        title: '',
        author: '',
        image: '',
        content: '',  
    })

    const navigate = useNavigate()//route from page to page we are using navigate because when we submit we need to move to the homepage

    const handleChange = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3500/posts', post)//first post is the method and the argument(post) is the object that we are sending
        navigate('/')
    }

    return (
        <Container className="mt-4">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' name='title' placeholder='Title' onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Author</Form.Label>
                    <Form.Control type='text' name='author' placeholder='Author' onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name='image' placeholder='Image URL' onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" name='content' placeholder='Content' onChange={handleChange} required/>
                </Form.Group>
                <Button variant='primary' type='submit'>Create</Button>
            </Form>
        </Container>
    )

}

export default NewPostPage;