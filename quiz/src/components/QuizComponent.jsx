import React from 'react'

export default class QuizComponent extends React.Component {
    constructor() {
        super();

    }
    render() { 
        return ( 
            <>
            <div className="body2">
            <div className="containerquiz">
                <h2>Question</h2>
                <p className='Qnum'>1 of 15</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, optio! </h4>
                <div className="options">
                    <button>Option 1 </button>
                    <button>Option 2 </button>
                    <button>Option 3 </button>
                    <button>Option 4 </button>
                </div>
                <div className="navButtons">
                    <button id='prev'>Previous</button>
                    <button id='next'>Next</button>
                    <button id='quit'>Quit</button>
                </div>
            </div>
            </div>
            </>
         );
    }
}
