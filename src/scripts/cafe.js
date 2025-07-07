document.addEventListener("DOMContentLoaded", () => {
    const block = document.querySelector(".block");
    const mario = document.querySelector(".mario");
    const imageContainer = document.querySelector(".image-container");
    const galleryImages = [
        "img/gorori.jpg",
        "img/ago.jpg",
        "img/okini.jpg",
        "img/kami.jpg"
    ];
    let currentImageIndex = 0;

    block.addEventListener("click", () => {
        mario.classList.add("jump");
        setTimeout(() => {
            mario.classList.remove("jump");
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length; // 次の画像に切り替え
            imageContainer.innerHTML = `<img src="${galleryImages[currentImageIndex]}" alt="ギャラリー画像" class="gallery-image">`;
        }, 500); // ジャンプ後に画像を切り替え
    });
});