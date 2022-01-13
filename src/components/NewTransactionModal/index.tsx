import { FormEvent, useState } from 'react';
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
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [radioBoxType, setRadioBoxType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        console.log({
            title,
            value,
            category,
            radioBoxType
        })
    };

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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>New Transaction</h2>

                <input
                    placeholder="Title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Amount"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
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
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Confirm
                </button>
            </Container>
        </Modal>
    )
}