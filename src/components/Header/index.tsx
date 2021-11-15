import logoImg from '../../assets/daxBudget-logo.svg'

import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dax money app logo" />
                <button type="button">
                    New Transaction
                </button>
            </Content>
        </Container>
    )
}