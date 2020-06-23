class Player{
    constructor(){
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
        playerCount = data.val();
        })
    }
    updateCount(playerCount){
        database.ref('/').update({
            playerCount: playerCount
        })
    }
    updateCount(voterCount){
        database.ref('/').update({
            voterCount: voterCount
        })
    }
    update(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name: name
        });
    }
    update(vote){
        var voteIndex = "player" + playerCount;
        database.ref(voteIndex).set({
            vote: vote
        });
    }
}