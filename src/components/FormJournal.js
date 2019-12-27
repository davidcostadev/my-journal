import React, { useState } from 'react';
import styled from 'styled-components';
import Field from './Field';
import Textarea from './Textarea';
import Button from './Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Actions = styled.div`
  display: flex;

  ${Button} {
    flex: 1;
    border-radius: 0;
  }
  ${Button}:first-child {
    border-radius: 4px 0 0 4px;
  }
  ${Button}:last-child {
    border-radius: 0 4px 4px 0;
  }
`

const FormJournal = ({ onSave, onCancel }) => {
  const [form, setField] = useState({ title: '', content:'' });

  const onSubmit = (event) => {
    event.preventDefault();
    onSave(form)
  };

  const onChange = ({ target: { name, value }}) => setField({
    ...form,
    [name]: value
  })

  return (
    <Form onSubmit={onSubmit}>
      <Field name="title" placeholder="Title" onChange={onChange} />
      <Textarea name="content" placeholder="Content" onChange={onChange} />
      <Actions>
        <Button type="button" color="gray" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </Actions>
    </Form> 
  );
}

export default FormJournal;
