import React, {useState} from 'react'

export default function About(props) {

    // const[myStyle, setMyStyle] = useState({
    //      color: 'black',
    //      backgroundColor:'white',
    // })

    let myStyle = {
        color: props.mode ==='dark'? 'white' : 'rgb(36 76 104)',
        backgroundColor: props.mode ==='dark'? 'rgb(36 76 104)' : 'white',
    }

    // const[btntext, setBtnText] = useState("Enable dark mode")

    // const toggleStyle = () =>{
    //     if(myStyle.color === 'white')
    //     {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor:'white',
    //             border:'1px solid black'
    //         })
    //         setBtnText("Enable dark mode")
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setBtnText("Enable light mode")
    //     }
    // }

  return (
        <div className="container">
            <h2 className="my-3" style={{color: props.mode ==='dark'? 'white' :'#04273'}} >About us</h2>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        TextUtils gives ytou a way to analyze your text quickly and efficiently. be it word count pr character count
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <strong> Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            Textutils is a free character counter tool that provides instant character count and word count statics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browser such as chrome, firefox, internet explorer,  safari, opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essay, etc
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
