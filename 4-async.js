// const get = (url) => Promise.resolve(url);

// async function getUserName(username) {
//     try {
//         const mainUser = await get(`/users?username=${username}`);
//         const posts = await get(`/posts?user_id=${mainUser.id}`);
//         const comments = await get(`/comments?post_id=${posts[0].id}`);
//         const user = await get(`/users?username=${comments[0].username}`);
//         console.log(user);
//     } catch (e) {
//         console.log(e);
//     }
// }



// we will se real senario -----------------
const axios = require('axios').default;
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

async function getComments(username) {
    try {
        const { data: user } = await axios.get(`${USERS_URL}?username=${username}`);
        const { data: posts } = await axios.get(
            `${POSTS_URL}?userId=${user[0].id}`
        );

        const { data: comments } = await axios.get(
            `${COMMENTS_URL}?postId=${posts[0].id}`
        );
            
        const { data: userWithComment } = await axios.get(
            `${USERS_URL}?email=${comments[1].email}`
        );
        
        console.log(userWithComment);
    } catch (error) {
        console.log('Error Occurred', error.toJSON());
    }
}

getComments('Bret');

