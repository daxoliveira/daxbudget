import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import despositsImg from '../../assets/deposits.svg';
import withdrawalsImg from '../../assets/withdrawals.svg'
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Close modal" />
            </button>

            <Container>
                <h2>New Transaction</h2>

                <input
                    placeholder="Title"
                />

                <input
                    type="number"
                    placeholder="Amount"
                />

                <TransactionTypeContainer>
                    <button
                        type="button"
                    >
                        <img src={despositsImg} alt="Deposit" />
                        <span>Deposit</span>
                    </button>
                    <button
                        type="button"
                    >
                        <img src={withdrawalsImg} alt="Withdrawal" />
                        <span>Withdrawal</span>
                    </button>

                </TransactionTypeContainer>

                <input
                    placeholder="Category"
                />

                <button type="submit">
                    Confirm
                </button>
            </Container>
        </Modal>
    )
}