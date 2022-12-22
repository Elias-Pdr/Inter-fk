function start() {
    let imgSize = document.querySelectorAll(".imgSize")

    for (let i = 0; i < imgSize.length; i++) {
        imgSize[i].width = (imgSize[i].width * 450) / 720
    }
}