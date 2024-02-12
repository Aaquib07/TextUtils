import React, {useState} from 'react'

const TextForm = (props) => {
    // Function to convert text to UPPERCASE
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to uppercase', 'success')
    }

    // Function to convert text to lowercase
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to lowercase', 'success')
    }

    // Eventhandler that modifies the input text 
    // when user types something or deletes something 
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // Function to convert text to camelCase
    const handleCamelClick = () => {
        let lowerText = text.toLowerCase()
        let newText = lowerText.split(' ').reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)))
        setText(newText)
        props.showAlert('Converted to camelcase', 'success')
    }

    // Function to calculate the number of words in the text
    const calculateLength = (text) => {
        let words = text.split(' ')
        let count = 0
        for (let i = 0; i < words.length; i++) {
            if (words[i] === '')
                continue
            count += 1
        }
        return count
    }

    // Function to calculate the number of characters in the text
    const calculateChars = (text) => {
        let count = 0
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ')
                continue
            count += 1
        }
        return count
    }

    const handleClear = () => {
        let newText = ''
        setText(newText)
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className='container' style={{color: props.mode === 'light' ? '#111111' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows="5" style={{backgroundColor: props.mode === 'light' ? 'white' : '#232528', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCamelClick}>Convert to Camelcase</button>
                <button className='btn btn-danger mx-2' onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'light' ? '#111111' : 'white'}}>
                <h1>Your text summary</h1>
                <p>{calculateLength(text)} words and {calculateChars(text)} characters</p>
                <p>{0.008 * calculateLength(text)} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the above textbox to preview'}</p>
            </div>
        </>
    )
}

export default TextForm