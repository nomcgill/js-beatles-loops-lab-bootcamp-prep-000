function theBeatlesPlay(musicians, instruments){
 var decision = []
 var who = musicians.length
 
  for (var i = 0; i < who; i++)
  {decision.push(musicians[i] + " plays " + instruments[i])
  }
return decision
  }
  
  function johnLennonFacts(facts){
    var facts2 = []
    var i = 0
    while (facts.length > i){
      facts2.push(facts[i] + "!!!")
      i++
    }
    return facts2
  }