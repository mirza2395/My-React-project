function Hello () {

    let mySent  = 'Having'
    let newSent = () => {
    return 'is awesome';
    }



    return <h2>{mySent} Me time {newSent()}
    </h2>
}


export default Hello;