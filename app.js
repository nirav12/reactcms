import React from 'react';
import { render } from 'react-dom';

const App = React.createClass({
    render() {
        return (
            <div>React CMS Git Commit</div>
        );

    }

});

render(<App />,document.querySelector('#app'));
