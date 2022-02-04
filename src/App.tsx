import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handleNewTransactionModalClose() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <div className="App">
      <Header onNewTransactionClick={handleNewTransactionModalOpen} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />
      <GlobalStyle />
    </div>
  );
}

export default App;
