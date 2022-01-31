/**
 * Takes some state and returns a virtual element
 */
//import {h} from "deku";

import {h} from "tsx-dom";


function view (state: any, dispatch: any) {
    return (
       <div>
           <button onClick={increment(dispatch)} data-attr={'test'}>{state.count}</button>
           <div>bla bla</div>
       </div>
    )
}

/**
 * Update the state
 */

function update (state: any, action: any) {
    console.log(update);
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 10
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
    }
    return state
}

/**
 * Get the initial state
 */

function init () {
    return {
        count: 10
    }
}

/**
 * Action creators
 */

function increment (dispatch: any) {
    console.log('increment');
    return () => dispatch({
        type: 'INCREMENT'
    })
}

function decrement (dispatch: any) {
    return () => dispatch({
        type: 'DECREMENT'
    })
}

export {view, update, init}
