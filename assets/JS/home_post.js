{
    // method to submit the form data for new post using AJAX
    let createPost = function(){
        let newPostform = $('#new-post-form');
        
        newPostform.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: newPostform.serialize(),
                success: function(data){
                    let newPost = newPostDom(data.data.post);
                    console.log('new post', newPost);
                    $('#posts-list-container>ul').prepend(newPost);
                    deletePost('.delete-post-button', newPost);
                }, error: function(eror){
                    console.log(error.responseText);
                },
                Cache: false,
            });
        });
    }
    // method to create a post in DOM
    let newPostDom = function(post){
        return $(`
        <li id="post-${post._id}">
                <p>
                        <small>
                                <a class="delete-post-button" href="/posts/destroy/${ post._id}">delete</a>
                        </small>
                        <br>
                         ${ post.content}
                                <br>
                                ${ post.user.name}
                                <br>
                                ${ post.user.email} 
                                <div class="post-comments">
                                        
                                                <form action="/comments/create" method="post">
                                                        <input type="text" name="content" placeholder="Type here to add comment... " required>
                                                        <input type="hidden" name="post" value="${ post._id }">
                                                        <input type="submit" value="sub_comment">
                                                </form>
                                        
                                </div>
                   
                </p>
        </li>
        `);
    }

    //method to delete a post from DOM
    let deletePost = function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();

            $.ajax({
                type: 'get',
                url: $(deleteLink).prop('href'),
                success: function(data){
                    console.log(data);
                    $(`#post-${data.data.post_id}`).remove();
                },error: function(error){
                    console.log(error.responseText);
                }
            })
        });
    }

    createPost();
}

