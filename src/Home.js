import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserList from './UserList';
import SearchBar from './SearchBar';
import './Home.css'
// import TagSearchBar from './TagSearchBar';
// import TagDetail from './TagDetail.js'

function Home() {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    // const [tags, setTags] = useState([]);
    // const [tagResults, setTagResults] =  useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            setError(null);
            setUsers(null);
            setLoading(true);
            const response = await axios.get('https://api.hatchways.io/assessment/students');
            setUsers(response.data.students);
        } catch(e) {
            setError(e);
        }
        setLoading(false);
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        const results = searchTerm ? users.filter(user=> (`${user.firstName} ${user.lastName}`)?.toUpperCase()
        .includes(searchTerm?.toUpperCase())) : users;
        setSearchResults(results);
    }, [searchTerm]);

    // useEffect(() => {
    //     const tagresults = searchTerm ? tags.filter(tag=> (`${tag.key}`)?.toUpperCase()
    //     .includes(searchTerm?.toUpperCase())) : tags;
    //     setSearchResults(tagresults);
    // }, [searchTerm]);
    
    
    const handleChange =  event => {
        setSearchTerm(event.target.value)
    }

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error</div>
    if(!users) return null;

    return (
        <div className="main">
            <SearchBar placeholder="Search by name" onChange={handleChange} value={searchTerm}/>
            {/* <TagSearchBar placeholder="Search by tag" onChange={handleChange} value={searchTerm} tags={tagResults}/> */}
            <UserList users={searchResults}/>
        </div>
    )
}

export default Home;
