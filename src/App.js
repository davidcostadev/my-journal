import React, { useState } from 'react';
import Cards from './components/Cards';
import Card from './components/Card';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Modal from './components/Modal';
import FormJournal from './components/FormJournal';
import { gray } from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    font-size: 16px;
    color: ${gray.n800};
    margin: 0;
  }
`;

const App = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const onAddJournal = () => {
    setModalVisibility(true);
  };
  const onSave = form => {
    console.log('onSave', form);
    setModalVisibility(true);
  };
  const onCancel = () => setModalVisibility(false);

  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Header onAddJournal={onAddJournal} />
        <Modal.Box isOpen={modalVisibility}>
          <FormJournal onSave={onSave} onCancel={onCancel} />
        </Modal.Box>
        <Cards>
          <Card />
          <Card />
        </Cards>
      </div>
      <Modal.BackDrop isOpen={modalVisibility} />
    </>
  );
};

export default App;
