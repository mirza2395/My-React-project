function Random() {

let Rnmbr = Math.random() * 100;

return <h2 style={{'background-color':'#889977'}}>Random number is {Math.round(Rnmbr)} </h2>

}


export default Random;