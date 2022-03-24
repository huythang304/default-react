import Button from 'react-bootstrap/Button';

import { useRoutes } from 'react-router-dom';

import Themeroutes from './routes/Routes';

function App() {

    const routing = useRoutes(Themeroutes);

    return (
        <>
            {routing}
            <Button variant="primary">Primary</Button>
        </>
    );
}

export default App;
