
const FSM = new FinalStateMachine()
// FSM._AddState('Forward', (howMuch)=> {console.log('forward', howMuch)})
// FSM._AddState('Right', (howMuch)=> {console.log('right', howMuch)})
// FSM._AddState('GrabBox', ()=> {console.log('grabbed')})
// FSM._AddState('OpenBox', ()=> {console.log('openned')})

console.log(FSM.states)
const runs = 1

let rest = prompt(`Because of the way js prompt function works, 
Set up how many seconds(in ms) you want to open the console, since its a console app.
So, how many seconds(in ms) do you need?`)

setTimeout(()=>{
    FSM.Init(runs)
}, rest )