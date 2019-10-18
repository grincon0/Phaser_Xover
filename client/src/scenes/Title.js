import Phaser from 'phaser'


class TitleScene extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }
    preload(){
        console.log('loading');
    }
    create(){
        this.add.text(200,20,"Loading game...");
    }
}

export default TitleScene;