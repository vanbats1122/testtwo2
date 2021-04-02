import React, {useState} from 'react';
import './TagDetail.css';

function TagDetail({userId, handleTags, tags}) {
    const [tagTerm, setTagTerm] = useState([]);
    const addTag = (e) => {
        if(e.key === 'Enter') {
            if(e.target.value.length > 0) {
                handleTags(userId, tags);
                setTagTerm("");

            }
        }
    };

    const handleChange =  (event) => {
        setTagTerm(event.target.value)
    };

    
    return (
        <div className="tagContainer">
            <div className="tagList">
            {tags?.map((tag, index) => {
                return (
                    <div key={index} className="tag">{tag}</div>
                    
                )
                
            }
            
            )}
            </div>
            
                <input 
                    type="text" 
                    placeholder="Add a tag" 
                    value={tagTerm}
                    onChange={handleChange}
                    onKeyDown={addTag}/>
            
        </div>
          
    )
}

export default TagDetail;
