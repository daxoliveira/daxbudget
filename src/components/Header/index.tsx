import logoImg from '../../assets/daxBudget-logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="daxBudget app logo" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    New Transaction
                </button>
            </Content>
        </Container>
    )
};
