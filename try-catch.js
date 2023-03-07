function checkAge(){
    const ageField = document.getElementById('age')
    const ageText = ageField.value ;
    ageField.innerHTML = '';
    const errorTag = document.getElementById('error');
    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "plice enter a number"
        }
        else if(age < 18){
            throw "not enughe age"
        }
        else if(age > 30){
            throw "old man not alowod"
        }
        errorTag.innerHTML =''
    }
    catch(err){
        console.log('ERROR:', err);
        errorTag.innerHTML = 'ERROR:' + err;

    }
    finally{
        console.log('all done')
    }
    console.log(11111)

}