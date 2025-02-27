import React, {useState} from "react"




const TeamMemberCard = () => {
    let {d, setData} = useState([])

    const add = () => {
        setData([
            {name: "Santhosh", jobTitle: "Software Engineer"},
            {name: "Pavan", jobTitle: "Civil Engineer"}
        ])
    }

    
    return (
        <div>
            <button onClick={add}>
                Show
            </button>
            <ul>

                {d.map((i, ind) => (
                    <li key={ind}>name : {i.name}, jobTitle : {i.jobTitle}</li>
                ))}
            </ul>
        </div>
    )


}

export default TeamMemberCard