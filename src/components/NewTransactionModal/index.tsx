import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import despositsImg from '../../assets/deposits.svg';
import withdrawalsImg from '../../assets/withdrawals.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [radioBoxType, setRadioBoxType] = useState('deposit');

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
                    <RadioBox
                        type="button"
                        onClick={() => setRadioBoxType('deposit')}
                        isActive={radioBoxType === 'deposit'}
                        activeColor="green"
                    >
                        <img src={despositsImg} alt="Deposit" />
                        <span>Deposit</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setRadioBoxType('withdraw')}
                        isActive={radioBoxType === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={withdrawalsImg} alt="Withdrawal" />
                        <span>Withdrawal</span>
                    </RadioBox>

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