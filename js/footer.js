const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `<div class="footer-content">
    <img src="../images/job551-namcha-17.jpg" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="catogory-title">men</li>
            <li><a href="#" class="footer-links">t-shirts</a></li>
            <li><a href="#" class="footer-links">sweatshirts</a></li>
            <li><a href="#" class="footer-links">shirts</a></li>
            <li><a href="#" class="footer-links">jeans</a></li>
            <li><a href="#" class="footer-links">trousers</a></li>
            <li><a href="#" class="footer-links">shoes</a></li>
            <li><a href="#" class="footer-links">casuals</a></li>
            <li><a href="#" class="footer-links">formals</a></li>
            <li><a href="#" class="footer-links">sports</a></li>
            <li><a href="#" class="footer-links">watch</a></li>
        </ul>
        <ul class="category">
            <li class="catogory-title">
                women
            </li>
            <li><a href="" class="footer-links">t-shirts</a></li>
            <li><a href="" class="footer-links">sweatshirts</a></li>
            <li><a href="" class="footer-links">shirts</a></li>
            <li><a href="" class="footer-links">jeans</a></li>
            <li><a href="" class="footer-links">trousers</a></li>
            <li><a href="" class="footer-links">shoes</a></li>
            <li><a href="" class="footer-links">casuals</a></li>
            <li><a href="" class="footer-links">formals</a></li>
            <li><a href="" class="footer-links">sports</a></li>
            <li><a href="" class="footer-links">watch</a></li>
        </ul>
    </div>
    
</div>
<p class="footer-title">about company</p>
    <p class="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
    Lorem Ipsum.</p>
<p class="info">support emails - help@cosmin.com, customersupport@cosmin.com</p>
<p class="info">telephone - 0785 385 058, </p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link"> terms & services</a>
        <a href="#" class="social-link"> privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link"> instagram</a>
        <a href="#" class="social-link"> facebook</a>
        <a href="#" class="social-link"> twitter</a>
    </div>
</div>
<p class="footer-credit">Clothing, Best apparels online store</p>`;
}

createFooter();