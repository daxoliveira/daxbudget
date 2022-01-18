import { useContext } from 'react';
import depositsImg from '../../assets/deposits.svg';
import withdrawalsImg from '../../assets/withdrawals.svg';
import balanceImg from '../../assets/balance.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if (transaction.type === 'deposit') {
    //         return acc + transaction.amount;
    //     }

    //     return acc;
    // }, 0);

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdrawals += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;

    }, {
        deposits: 0,
        withdrawals: 0,
        total: 0,
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Deposits</p>
                    <img src={depositsImg} alt="Deposits" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Withdrawals</p>
                    <img src={withdrawalsImg} alt="Withdrawals" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.withdrawals)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Balance</p>
                    <img src={balanceImg} alt="Balance" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}