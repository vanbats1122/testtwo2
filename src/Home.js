/* eslint-disable */

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import UserList from './UserList';
import SearchBar from './SearchBar';
import './Home.css';

function Home() {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);


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
        if(!loading) {
            const results = searchTerm ? users.filter(user => (`${user.firstName} ${user.lastName}`)?.toUpperCase()
            .includes(searchTerm?.toUpperCase())) : users;
            setSearchResults(results);
        }
        }, [searchTerm, loading]);
    
    
    const handleChange =  event => {
        setSearchTerm(event.target.value);
    }


    const handleTags = (id, tag) => {
        setUsers(users.map(user => {
            if(user.id === id) {
            user.tags = user.tags || [];
            user.tags = [...user.tags, tag];
        }
        return user;
    
        })
        )

    }

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error</div>
    if(!users) return null;

    return (
        <div className="main">
            <SearchBar placeholder="Search by name" onChange={handleChange} value={searchTerm}/>
            <UserList users={searchResults} handleTags={handleTags}/>
        </div>
    )
}

export default Home;
