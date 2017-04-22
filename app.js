import React from 'react';
import { render } from 'react-dom';

const App = React.createClass({
    render() {
        return (
            <div>React1</div>
        );

    }

});

render(<App />,document.querySelector('#app'));
