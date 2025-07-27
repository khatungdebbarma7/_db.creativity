function orderNow(productName) {
    const msg = `Hi! I'm interested in "${productName}". Is it available?`;
    const whatsappURL = `https://wa.me/7005070622?text=${encodeURIComponent(msg)}`;
    window.open(whatsappURL, '_blank');
}

function showGallery(productName, imageList){
    const gallery = document.getElementById("galleryImages");
    gallery.innerHTML = "";
    imageList.forEach(img => {
        const image = document.createElement("img");
        image.src = "images/" +img;
        gallery.appendChild(image);
    });
    document.getElementById("galleryModal").style.display = "block";
}

function closeGallery() {
    document.getElementById("galleryModal").style.display = "none";
}