function saturdayFun(activity="roller-skate"){
    return(`This Saturday, I want to ${activity}!`)
}

const mondayWork = function(workStyle="go to the office") {
    return (`This Monday, I will ${workStyle}.`)
}

function wrapAdjective(decor = "*") {
    return function (descriptor = "special"){
        return (`You are ${decor}${descriptor}${decor}!`)
    }
}
