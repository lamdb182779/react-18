import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "../../style/Markdown.scss"

const Markdown = () => {
    const [textareaValue, setTextareaValue] = useState("");



    function handleChange(event) {
        setTextareaValue(event.target.value);
    }

    return (
        <div>
            <textarea value={textareaValue} onChange={handleChange} autoFocus />
            <ReactMarkdown className="markdown">{textareaValue}</ReactMarkdown>
        </div>
    );
}

export default Markdown