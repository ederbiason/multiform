import { Link, useNavigate } from 'react-router-dom';

import * as C from './styles';

import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export function FormStep3() {
    const navigate = useNavigate();

    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, [dispatch, navigate, state.name])

    function handleNextStep() {
        if (state.email !== '' && state.github !== '') {
            console.log(state)
        } else {
            alert('Preencha os dados.')
        }
    }

    function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setEmail,
            payload: event.target.value
        })
    }

    function handleGithubChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setGithub,
            payload: event.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com as seguintes informações para conseguirmos entrar em contato.</p>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input 
                        type="email" 
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu Github?
                    <input 
                        type="url" 
                        autoFocus
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>
                
                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>
                    Finalizar cadastro
                </button>
            </C.Container>
        </Theme>
    )
}