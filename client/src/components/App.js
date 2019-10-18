import React, {useState, useCallback, useEffect} from 'react';
import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    console.log('pre-loading')
    //game.scene.add.
}
function create() {
    console.log('creating')

}

const App = () => {

        return(
        <div>
            <h1>Look ma, no create-react-app!</h1>
        </div>
        );
    
}

export default App;