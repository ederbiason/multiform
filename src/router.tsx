import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { FormStep1 } from './Pages/FormStep1';
import { FormStep2 } from './Pages/FormStep2';
import { FormStep3 } from './Pages/FormStep3';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormStep1/>}/>
                <Route path="/" element={<FormStep2/>}/>
                <Route path="/" element={<FormStep3/>}/>
            </Routes>
        </BrowserRouter>
    )
}