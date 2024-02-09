document.addEventListener("DOMContentLoaded", (event) =>{

    setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `<iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25282.803501028066!2d-1.009106958514518!3d37.61744385332854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd634222a43ab56d%3A0x47d790cefef6f9ff!2sCartagena%2C%20Murcia!5e0!3m2!1ses!2ses!4v1707466691474!5m2!1ses!2ses"  
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }, 2000)
})