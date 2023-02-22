import {AnimatePresence} from 'framer-motion'
import {Suspense} from 'react'

import {GlobalStyles} from './styles/GlobalStyles'
import {Nav} from '../widgets/Navbar'
import {PageLoader} from "../shared/ui/PageLoader/PageLoader";
import {AppRouter} from "./providers/router";

function App() {
    return (
        <div>
            <GlobalStyles/>
            <Suspense fallback={<PageLoader/>}>
                <Nav/>
                <AnimatePresence mode={'wait'}>
                    <div className="content-page">
                        <AppRouter />
                    </div>
                </AnimatePresence>
            </Suspense>
        </div>
    )
}

export default App
