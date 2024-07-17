function changeCntent(page){
    var div1 = document.getElementById('content');
    switch(page){
        case home:
        div1.innerHTML=`<img src= shamsung.png>
        <h2>
        Welcome to the home page
        </h2>
        <p>
        this is the main page of our website
        </p>
        `;
        break;
        case about:
        div1.innerHTML=`
        <h2>About us</h2>
        <p>
        This is the about page 
        learn more about our team
        </p>
        <p>
        we're here to fulfill your choices
        </p>
        `;
        break;
        case contact:
        div1=`<h2>contact us</h2>
        <p>
        feel free to reach us 
        </p>
        <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required>
        <label for="message">Message:</label>
        <textarea id="email" name="email" placeholder="Your message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
        </form>`;
        break;
        default:
            div1.innerHTML='<h2>Page not found!</h2>'
    }
}