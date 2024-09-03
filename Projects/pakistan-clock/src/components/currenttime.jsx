let Currenttime = () => {
    // const currDate = new Date().toLocaleDateString();
    // const currTime = new Date().toLocaleTimeString();

    const currDate = new Date()
    const currTime = new Date()
    return <p>This time is: {currDate.toLocaleDateString()} - {currTime.toLocaleTimeString()}</p>;
    };
    
    export default Currenttime;