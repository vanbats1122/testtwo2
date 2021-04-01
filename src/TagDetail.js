import React, {useState} from 'react';
import './TagDetail.css';

function TagDetail({userId, handleTagTerm}) {
    const [tags, setTags] = useState([]);

    // const addTag = event => {
    //     // if(e.key === 'Enter') {
    //     //     // if(e.target.value.length > 0) {
    //     //     //     setTags([...tags, e.target.value])
    //     //     //     e.target.value = ''
    //     //     // }
    //     // }
    // };

    const enterTag = e => {
        if(e.key === 'Enter') {

            handleTagTerm(userId, tags);
        }

    }

    const handleChange =  event => {
        setTags(event.target.value)
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
                    value={tags}
                    onChange={handleChange}
                    onKeyDown={enterTag} />
            
        </div>
          
    )
}

export default TagDetail;
