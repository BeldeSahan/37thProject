class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("yellow");
    text("Result Of  the Quiz",340,50);
    Contestant.getPlayerInfo();
    if(allContestants !==undefined){
      var display_Answers=130;
    fill("blue");
    text("NOTE: Contestant who answered correct are highlighted in green color!",130,230);
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
      fill("green");
      else
      fill("red");
      display_Answers+=30;
      textSize(20);
      text(allContestants[plr].name + ":" + allContestants[plr].answer,250,display_Answers )
      }
  
    }
        }
    
  }


