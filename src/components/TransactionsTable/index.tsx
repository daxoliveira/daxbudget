import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Freelance Website Construction</td>
                        <td className="deposit">$10,000</td>
                        <td>Freelancing</td>
                        <td>10/31/2021</td>
                    </tr>
                    <tr>
                        <td>Rent</td>
                        <td className="withdrawal">-$10,000</td>
                        <td>Freelancing</td>
                        <td>10/31/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}