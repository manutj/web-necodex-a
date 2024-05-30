import React, {useState, useEffect} from 'react'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

const AddEditForm = (props) => {

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email:""
    })

    const onChange = (e) => {
        setForm({
           ...form,
           [e.target.name]: e.target.value
        })
    }

  return (
    <div>
        <Form>
            <FormGroup>
                <Label for='first_name'>Nombre</Label>
                <Input
                    value={''}
                    onChange={onChange}
                    type='text'
                    id='firstName'
                    name='first_name'
                />
            </FormGroup>
            <FormGroup>
                <Label for='last_name'>Apellido</Label>
                <Input
                    value={''}
                    onChange={onChange}
                    type='text'
                    id='lastName'
                    name='last_name'
                />
            </FormGroup>
            <FormGroup>
                <Label for='email'>Email</Label>
                <Input
                    value={''}
                    onChange={onChange}
                    type='email'
                    id='email'
                    name='email'
                />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    </div>
  )
}

export default AddEditForm