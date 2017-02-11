import React, {PropTypes} from 'react';

export class Form extends React.Component({

propTypes :{
    update: PropTypes.func,
    reset: PropTypes.func,
    onSubmit: PropTypes.func,
    values: PropTypes.object
},

render(){
    return (
        <form>
            {this.props.children}
        </form>
    );

}

});