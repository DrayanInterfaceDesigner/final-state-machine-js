class FieldIncludes {

    constructor(words = []){

        this.forbiddenWords = words
        this._compel()
        this.run

    }

    //Lower case all words
    _compel() {
        let words = []
        this.forbiddenWords.forEach(word => {
            words.push(word.toLowerCase())
        })
        this.forbiddenWords = words
    }


    //Base of the code, aka check if there's any of the passed words on the field
    //Works on console since does not require any document fields
    run(string) {

        const forbiddenWords = this.forbiddenWords;
        string = string.toLowerCase()

        if (forbiddenWords.some(word => string.includes(word))){
            return true
        } else {
            return false
        }
    }

    //Checks how many of the words are on the field
    //Works on console
    many(string) {

        let words = 0
        let checked = []
        const forbiddenWords = this.forbiddenWords;
        string = string.toLowerCase()

        forbiddenWords.forEach( wordd => {
    
            if (string.includes(wordd)){
                if(!checked.includes(wordd)) {
                    words++
                }
            }
            checked.push(wordd)
        })

        return words        
    }

    //Checks the passed field value (string)
    //Should have callbacks instead an :) , but what can i say? At least is cute
    check(txtField, checkBtn, messageField) {

        let field = document.querySelector(`#${txtField}`);
        let btn = document.querySelector(`#${checkBtn}`);
        let messageBox = document.querySelector(`#${messageField}`);
        let result
        btn.addEventListener("click", () =>  {

            let check = this.run(field.value)
            result = check

            if (check){
                messageBox.innerHTML = "Forbidden!";
            } else {
                messageBox.innerHTML = "Okay :)";            
            }
        })

        return result
    }
}