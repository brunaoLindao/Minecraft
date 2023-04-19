var canvas = new fabric.Canvas('myCanvas');
blocol = 30;
blocoa = 30;
pX = 10;
pY = 10;
player = '';
function playerupdate() {
    fabric.Image.fromURL('player.png', function (Img) {
        player = Img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            top: pY,
            left: pX
        });
        canvas.add(player);
    });
}
function novaimagem(imagem) {
    fabric.Image.fromURL(imagem, function (Img) {
        bloco = Img;
        bloco.scaleToWidth(blocol);
        bloco.scaleToHeight(blocoa);
        bloco.set({
            top: pY,
            left: pX
        });
        canvas.add(bloco);
    });
}
window.addEventListener('keydown', mykeydown);
function mykeydown(e) {
    tecla = e.keyCode;
    if (e.shiftKey == true && tecla == "80") {
        blocoa = blocoa + 10;
        blocol = blocol + 10;
        document.getElementById("largura").innerHTML = blocol;
        document.getElementById("Altura").innerHTML = blocoa;
    }
    if (e.shiftKey == true && tecla == "77") {
        blocoa = blocoa - 10;
        blocol = blocol - 10;
        document.getElementById("largura").innerHTML = blocol;
        document.getElementById("Altura").innerHTML = blocoa;
    }
    if (tecla == '87') {
        novaimagem('wall.jpg');
    }
    if (tecla == '71') {
        novaimagem('ground.png');
    }
    if (tecla == '76') {
        novaimagem('light_green.png');
    }
    if (tecla == '84') {
        novaimagem('trunk.jpg');
    }
    if (tecla == '82') {
        novaimagem('roof.jpg');
    }
    if (tecla == '89') {
        novaimagem('yellow_wall.png');
    }
    if (tecla == '68') {
        novaimagem('dark_green.png');
    }
    if (tecla == '85') {
        novaimagem('unique.png');
    }
    if (tecla == '67') {
        novaimagem('cloud.jpg');
    }
    if (tecla == '38') {
        up();
    }
    if (tecla == '40') {
        down();
    }
    if (tecla == '37') {
        left();
    }
    if (tecla == '39') {
        right();
    }

}
function up() {
    if (pY >= 0) {
        pY = pY - blocoa;
        canvas.remove(player);
        playerupdate();
    }
}
function down() {
    if (pY <= 550) {
        pY = pY + blocoa;
        canvas.remove(player);
        playerupdate();
    }
}
function left() {
    if (pX>0) {
        pX = pX - blocol;
        canvas.remove(player);
        playerupdate();
    }
}
function right() {
    if (pX <= 850) {
        pX = pX + blocol;
        canvas.remove(player);
        playerupdate();
    }
}