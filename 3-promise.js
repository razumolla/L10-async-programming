
// const isResolved = false;
// const isResolved = true;

// const promise=new Promise((resolve, reject) => {
//     if (isResolved) {
//         resolve("Completed");
//     } else {
//         // reject(new Error('Something wrong'));
//         reject("data");
//     }
// })

// console.log(promise);

// promise
//     .catch((e) => {
//         console.log("reject");
//         console.log(e)
//     })
//     .then((result) => {
//         console.log(result);
//     })

//--------------------

// function wait(ms) {
//     const promise = new promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// }

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(1000).then(() => {
//     console.log('Done in 1000ms');
// });

// wait(2000).then(() => {
//     console.log('Done in 2000ms');
// });

// wait(3000).then(() => {
//     console.log('Done in 3000ms');
// });




// -----------------

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


const get = (url) => Promise.resolve(url);

get(`/users?username=anarul`)
    .then((user) => {
        /** do all other operations here */
        return get(`/posts?user_id=${user.id}`);
    })
    .then((posts) => {
        const latestPost = posts[0];
        return get(`/comments?post_id=${latestPost.id}`);
    })
    .then((comments) => {
        const latestComment = comments[0];
        return get(`/users?username=${latestComment.username}`);
    })
    .then((user) => {
        console.log(user);
    })
    .catch(() => {
        console.log('Error');
    });
