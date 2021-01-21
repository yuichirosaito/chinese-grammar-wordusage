import consumer from "./consumer"

consumer.subscriptions.create("PostChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const html = 
   `<div class="post">
    <div class="post-date">
      投稿日時：${data.contents.created_at}
    </div>
    <div class="post-content">
    ${data.contents.content}
    </div>    
    </div>`;
    const messages = document.getElementById('posts');
    const newMessage = document.getElementById('post_content');
    messages.insertAdjacentHTML('afterbegin', html);
    newMessage.value='';  }
});



    
    
      
  
