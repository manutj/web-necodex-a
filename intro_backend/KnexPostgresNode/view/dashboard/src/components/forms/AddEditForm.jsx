import React, {useState, useEffect} from 'react'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

const AddEditForm = (props) => {

    useEffect(() => {
      if(props.item){
        const {id, email, first_name, last_name} = props.item
        setForm({id, email, first_name, last_name })
      }
    }, [])
    

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
                    value={form.first_name === null ? "" : form.first_name}
                    onChange={onChange}
                    type='text'
                    id='firstName'
                    name='first_name'
                />
            </FormGroup>
            <FormGroup>
                <Label for='last_name'>Apellido</Label>
                <Input
                    value={form.last_name === null ? "" : form.last_name}
                    onChange={onChange}
                    type='text'
                    id='lastName'
                    name='last_name'
                />
            </FormGroup>
            <FormGroup>
                <Label for='email'>Email</Label>
                <Input
                    value={form.email === null ? "" : form.email}
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