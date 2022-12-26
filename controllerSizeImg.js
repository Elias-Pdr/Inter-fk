function start() {
    document.querySelector(".body").style.opacity = '1'
    //document.getElementById(".body").style.opacity = '1'
    let imgSize = document.querySelectorAll(".imgSize")

    for (let i = 0; i < imgSize.length; i++) {
        imgSize[i].width = (imgSize[i].width * 450) / 720
    }
}