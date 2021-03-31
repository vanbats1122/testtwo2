import React, {useState} from 'react'
import './TagDetail.css'

function TagDetail() {
    const [tags, setTags] = useState([]);
    const addTag = (e) => {
        if(e.key === 'Enter') {
            if(e.target.value.length > 0) {
                setTags([...tags, e.target.value])
                e.target.value = ''
            }
        }
    }
    
    return (
        <div className="tag-container">
            {tags.map((tag, index) => {
                return (
                    <div key={index} className="tag">{tag}</div>
                    
                )
            })}
            
                <input 
                    type="text" 
                    placeholder="Add a tag" 
                    onKeyDown={addTag}/>
            
        </div>
          
    )
}

export default TagDetail()
