
const reader = require('readline-sync')

const userId = reader.question("Enter UserId: ")
const postId = reader.question("Enter PostId: ")
const url = "https://jsonplaceholder.typicode.com/posts"

printTargetedPost(userId, postId)
printAllPosts(userId)

function printTargetedPost(userId, postId) {
    getFilteredPostsFor(userId).then(function(userPosts) {
        const targetedPost = userPosts.filter(function(post) {
            return post.id === postId
        })[0]

        if (targetedPost)
            console.log(targetedPost)
        else
            console.log(`{postId} not found!`)
    })
}

function printAllPosts(userId) {
    getFilteredPostsFor(userId).then(function(posts){
        console.log(posts)
    })
}

function getFilteredPostsFor(userId) {
    return sendRequest(url).then(function(posts){
        return posts.filter(function(post) {
            return post.userId === userId
        })
    })
}

function sendRequest(url){
    return fetch(url).then(function(res){
        return res.json()
    })
}

