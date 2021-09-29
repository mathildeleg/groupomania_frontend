import React, { Component, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Post () {
//     const token = localStorage.getItem('token');
//     const [post, setPost] = useState([]);
    
//     useEffect(function() {
//         (async function() {
//             const res = await fetch('http://localhost:3000/api/forum/1/post', {
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     'Authorization': `token ${token}`,
//                     },
//                 });
//             const resData = await res.json()
//             console.log(resData)
//             if (res.ok){
//                 return setPost(resData);
//             } else {
//                 console.log('error');
//             }
//         })
//     }, [])

//     return <div>{post.map(content => <div>{content.postMessage}</div>)}</div>
// }


export default class Forum extends Component {
    async componentDidMount() {
        const token = localStorage.getItem('token');
    
        const res = await fetch('http://localhost:3000/api/forum/1/post', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `token ${token}`,
            },
        });
        if(res.ok) {
            const forum = await res.json();
            console.log(forum);
        } else {
            console.log('error')
        }
            // const postList = forum.map((post) => {
            //     return <div>
            //         <div>
            //             {post.content.postMessage}
            //         </div>
            //     </div>
            // })
            // console.log(postList);
            // postList.forEach(element => console.log(element));

    }

    render() {
        return <div className="container flex justify-center">
                    <div className="flex flex-col">
                        <div>hello</div>
                    </div>
                </div>
    }
}