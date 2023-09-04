function createLinkImage() {
    var referenceImage = document.querySelectorAll('.image-id-cat');
    var imageLink = document.querySelectorAll('img.image-cat-link');
    //https://cdn2.thecatapi.com/images/
    for (let i = 0; i <= 9; i++) {
        //console.log(referenceImage[i].textContent);
        imageLink[i].src = "https://cdn2.thecatapi.com/images/" + referenceImage[i].textContent.toString() + ".jpg"
        console.log(imageLink[i]);
    }
}
createLinkImage()