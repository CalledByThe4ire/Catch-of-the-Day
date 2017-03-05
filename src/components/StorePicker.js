import React from 'react';
import {getFunName} from '../helpers';


class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     // this is equal to component inside of the constructor
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore(evt) {
        evt.preventDefault();
        // first grab the text from the box
        // second we're going to transition from / to /store/:storeId
        const storeId = this.storeInput.value;
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={ (evt) => this.goToStore(evt) }>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {
                    this.storeInput = input
                }}/>
                <button type="submit">Visit Store --></button>
            </form>
        );
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
};

export default StorePicker;