class Form {
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);
        var input = createInput("Name");
        var button = createButton("Log in");
        var greeting = createElement("h3")
        input.position(130,160);
        button.position(25,200);

        button.mousePressed(()=>{
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+name);
            greeting.position(130,160);
        })
    }
}