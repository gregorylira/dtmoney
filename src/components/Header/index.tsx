import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onNewTransactionClick: () => void;
}

export function Header({ onNewTransactionClick }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onNewTransactionClick}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
