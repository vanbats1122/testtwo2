import React, {useState} from 'react'
import TagDetail from './TagDetail';
import './UserDetail.css'



function UserDetail( {user, handleTags}) {

    const [showGrades, setShowGrades] =  useState(false);
    const [btnText, setbtnText] = useState("+");

   
   
    const btnClick = () => {
        setShowGrades(!showGrades);
        setbtnText(btnText === "+" ? "-" : "+");
    }


    return (
       
        
        <div className="detail"> 
            <img src={`${user.pic}`} />
            <div className="student__info">
                <div className="bold">{`${user.firstName} ${user.lastName}`.toUpperCase()}</div>
                <button onClick = {()=>btnClick()}>{btnText}</button>
           
                <div> &nbsp; &nbsp; Email: {`${user.email}`}</div>
                <div> &nbsp; &nbsp; Skills: {`${user.skill}`}</div>
                <div> &nbsp; &nbsp; Average: {`${user.grades.reduce((sum,curr) => 
                    sum + Number(curr),0)/user.grades.length}%
                `}</div>

             {
                showGrades && (<div key={user.id}> {user.grades
                    .map((grade, index) => 
                    <div className="gradeList">Test {index+1}: {grade}%</div>
                )}</div>)
            }
            <TagDetail userId={user.id} handleTags={handleTags} tags={user.tags}/>
            </div>
        </div>
        
    )
}



export default UserDetail;
