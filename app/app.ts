function startGame(){
    var messageElement = document.getElementById('message');
    messageElement!.innerText = 'welcome to the game';
}

document.getElementById('startGame')?.addEventListener('click',startGame);