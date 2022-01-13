function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`;
}

const mondayWork = function (task = 'go to the office') {
    return `This Monday, I will ${task}.`;
}

let wrapAdjective = function(outerParameter = '*'){
    return function (innerParameter = 'special'){
        return `You are ${outerParameter}${innerParameter}${outerParameter}!`;
    };
}

saturdayFun();
mondayWork();
wrapAdjective();