
const reader = require('readline-sync')

const userId = reader.question("Enter UserId: ")
const postId = reader.question("Enter PostId: ")
const url = "https://jsonplaceholder.typicode.com/posts"

await printTargetedPost(userId, postId)
await printAllPosts(userId)

async function printTargetedPost(userId, postId) {

    const userPosts = await getFilteredPostsFor(userId)

    const targetedPost = userPosts.filter(function(post) {
        return post.id === postId
    })[0]

        if (targetedPost)
            console.log(targetedPost)
        else
            console.log(`{postId} not found!`)
}

async function printAllPosts(userId) {
    const userPosts = await getFilteredPostsFor(userId)
    console.log("User's posts: " + userPosts)
}

async function getFilteredPostsFor(userId) {

    const posts = await sendRequest(url)

    return posts.filter(function(post) {
        return post.userId === userId
    })
}

async function sendRequest(url){
    return fetch(url).then(function(res){
        return res.json()
    })
}

