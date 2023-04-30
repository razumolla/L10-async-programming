/**
 * 1. find the user by username
 * 2. find post by userId
 * 3. find the latest post
 * 4. find comments by post id
 * 5. find the latest comment
 * 6. Find the username of the latest commented user
 */

/**
 * /users?username=[username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username=[username]
 */

function get(path, cb) {
    const data = {}; // somehow process it
    cb(data);
}

// CallBack Hell

function getUserNameFromComment(username) {
    get(`users?username=${username}`, (user) => {
        get(`posts?user_id=${user.id}`, (posts) => {
            get(`comments?post_id=${posts[0].id}`, (comments) => {
                get(`users?username=${comments[0].username}`, (user) => {
                    console.log(user);
                });
            });
        });
    });
}

getUserNameFromComment('arif');