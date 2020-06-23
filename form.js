class Form{
    constructor(){
    }
    display(){
        var input = createInput("Name");
        var button = createButton('Enter');
        var greeting = createElement('h3');
        input.position(450, 280);
        button.position(500, 320);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount++;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello " + name);
            greeting.position(500, 320);
            if(mouseIsPressed){
                var answer = createInput("Sahaj Agarwal/Neev Agarwal");
                var button2 = createButton('Enter');
                var question = createElement('h3');
                var greeting2 = createElement('h3');
                answer.position(450,280);
                question.position(400,280);
                question.html("Please write the name of your vote for the president of your society");
                button2.mousePressed(function(){
                    greeting.hide();
                    answer.hide();
                    button2.hide();
                    question.hide();
                    var vote = answer.value();
                    voterCount++;
                    player.update(vote);
                    greeting2.html("Thanks for submitting your vote", 200,200)
                    greeting2.position(400,200);
                })
            }
        })
    }
}