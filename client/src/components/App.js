import React, {useState, useReducer, useCallback, useEffect} from 'react';
import Phaser from 'phaser';
import TitleScene from '../scenes/Title.js';

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    scene: [ new TitleScene()]
};

const game = new Phaser.Game(config);

/* const preload = () => {
    console.log('pre-loading');
    //game.scene.add.
}
const create = () => {
    console.log('creating');
    switchScene();
}

const switchScene = () => {
    console.log('init switching');
    setTimeout(()=> {
        config.scene = [TitleScene]
    }, 1000);
} */

const gameReducer = (currentState, action) => {
    switch (action.type) {
        case 'ADD_SCENE':
            
           return{
               ...currentState,
               scene: []
           }
    
        default:
            break;
    }


}
const App = () => {
    const [gameState, dispatchState] = useReducer(gameReducer, config);

    useEffect(()=>{
     
    }, [])


        return(
        <div>
            <h1>Look ma, no create-react-app!</h1>
        </div>
        );
    
}

export default App;