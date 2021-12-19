// DO SOMETHING
// DO ANOTHER SOMETHING WITH THIS SOMETHING
// REPEAT?

class FinalStateMachine {
    constructor () {
        this.states = new Map()
        this.lastState = null
        this.currState = null
        this.currStatus = false
        this.TurnOn()
        this.BoilWater()
        this.AddCoffee()
        this.Dump()
        this.Ready()
    }

    //wasn't supposed public, but here we are, trying new things.
    //SETS A STATE IN THE STATES'S MAP
    _AddState(name, callback) {
        this.states.set(name, callback)
    }

    Init(times){

        if(typeof times === "string") {
            new Error('NaN')
            return
        }

            
        for(let i = 0; i < times; i++) {

            this.states.forEach( ( state, key) => {

                this.currState = key
                setTimeout(()=>{state()}, 1000)
                this.lastState = key
            })
        }   
    }
 
    execute(state, param) {
        this.states.get(state)(param)
    }


    //COFFEE FINAL STATE MACHINE BELOW

    TurnOn(){
        this._AddState('TurnOn', ()=> {

            if(this.currStatus === false) {
                this.currStatus = true
                console.log('Google Coffe(c) Extra Sussy On')
            }
        })
    }
    BoilWater(){
        this._AddState('BoilWater', ()=> {
            let temperature = prompt('Set the temperature:')
            while(temperature < 70) {
                temperature = prompt('Needs to be above 70ºC, please set the temperature:')
            }
            console.log(`Boiling the water...`)
            console.log(`${temperature}ºC reached`)
        })
    }
    AddCoffee(){
        this._AddState('AddCoffee', ()=> {

            let options = ['strong', 'medium', 'soft']
            const FI = new FieldIncludes(options)

            let intensity = 0
            intensity = prompt('What intensity do you want? [ STRONG, MEDIUM, SOFT ]')

            while(FI.many(intensity) < 0 || FI.many(intensity) !== 1 ) {
                intensity = prompt('What intensity do you want? [ STRONG, MEDIUM, SOFT ]')
            }
            console.log(`Making a ${intensity} coffee for ya...`)
        })
    }
    Dump(){
        this._AddState('Dump', () => {
            console.log('Serving your coffee...')
        })
    }
    Ready(){
        this._AddState('Ready', ()=> {
            console.log('Your coffee is ready, check out your cup and go back to code.')
        })
    }
}