import { ReactNode } from 'react';
import * as C from './styles';

import { Header } from '../Header'
import { SidebarItem } from '../SidebarItem';

type Props = {
    children: ReactNode;
}

export function Theme({children}: Props) {
    return (
        <C.Container>
            <C.Area>
                <Header/>

                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                        />

                        <SidebarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/step2"
                        />

                        <SidebarItem
                            title="Contatos"
                            description="Como te contactar"
                            icon="mail"
                            path="/step2"
                        />
                    </C.Sidebar>

                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}