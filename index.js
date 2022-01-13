function saturdayFun(fun) {
    let activity;
    
    if (fun === undefined){
      activity = 'roller-skate';
    } else if (fun != undefined){
      activity = fun;
    }
    let statement = `This Saturday, I want to ${activity}!`;
  
    return statement;
}
  
const mondayWork = function (task) {
    let activity;
    
    if (task === undefined){
      activity = 'go to the office';
    } else if (task != undefined){
      activity = task;
    }
    let statement = `This Monday, I will ${activity}.`;
  
    return statement;
}
function wrapAdjective(outerParameter = '*'){
    const inner = function (innerParameter = 'special'){
        return `You are ${outerParameter}${innerParameter}${outerParameter}.`;
    };
    return inner();
}

saturdayFun();
mondayWork();
wrapAdjective(); 

/*function wrapAdjective(outerParameter){
    let specialOperator;
    let adj;

    if (outerParameter === undefined){
        specialOperator = '*';
    } else if (outerParameter != undefined){
        specialOperator = outerParameter;
    }
    const inner = function (innerParameter){
        if (innerParameter === undefined){
            adj = 'special';
        } else if (innerParameter != undefined){
            adj = innerParameter;
        };
        return `You are ${specialOperator}${innerParameter}${specialOperator}.`;
    };
    return inner();
}
*/