import React, {useState} from 'react';



export default function About(props) {

    // const [mystyle, setMystyle] = useState({ 
    //     color: 'white',
    //     backgroundColor:'black'
    // });
    
    // const [btntext, setBtnText] = useState('Enable Dark Mode');
    
    // const togglebutton = () =>{
    //     if(mystyle.color == 'white'){
    //         setMystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText('Enable Dark Mode');
    //     }
    //         else{
    //             setMystyle({
    //                 color:'white',
    //                 backgroundColor:'black'
    //             })
    //             setBtnText('Enable Light Mode');
    //         }
    //     }


    let mystyle = {
        color: props.mode ==='dark'?'white' : 'black',
        backgroundColor: props.mode ==='dark'?'black' : 'white'
    }

    return (
        <>
        <div className='container' style={mystyle }>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" style={mystyle }>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle }>
                        <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle }>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle }>
                        <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle }>
                        These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle }>
                           <strong>browser compatibility</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle }>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='container my-3'>
            <button type="button" class="btn btn-primary" onClick={togglebutton}>{btntext}</button>
        </div> */}
        </>
    )
}
