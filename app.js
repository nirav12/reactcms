import React from 'react';
import { render } from 'react-dom';

const App = React.createClass({
    render() {
        return (
            <div>React2</div>
        );

    }

});

render(<App />,document.querySelector('#app'));
