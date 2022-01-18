import { useContext } from 'react';
import depositsImg from '../../assets/deposits.svg';
import withdrawalsImg from '../../assets/withdrawals.svg';
import balanceImg from '../../assets/balance.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    console.log(transactions);
    return (
        <Container>
            <div>
                <header>
                    <p>Deposits</p>
                    <img src={depositsImg} alt="Deposits" />
                </header>
                <strong>$1000.00</strong>
            </div>
            <div>
                <header>
                    <p>Withdrawals</p>
                    <img src={withdrawalsImg} alt="Withdrawals" />
                </header>
                <strong>(-)$5000.00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Balance</p>
                    <img src={balanceImg} alt="Balance" />
                </header>
                <strong>(-)$4000.00</strong>
            </div>
        </Container>
    )
}