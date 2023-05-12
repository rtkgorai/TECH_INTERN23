const books = document.querySelectorAll('.book');
books.forEach(book => {
    book.addEventListener('mouseover', () => {
        book.style.boxShadow = '4px 4px 8px rgba(0,0,0,0.5)';
    });
    book.addEventListener('mouseout', () => {
        book.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.3)';
    });
});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}