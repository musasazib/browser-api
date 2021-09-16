// alert('Exploring Alert!!!!!! ok');

const alertExplore = () => {
    alert('Masud valoo hoye jao');
};

const askPicnic = () => {
    const response = confirm('Are you going to picnic');
    console.log(response);
    if (response === true) {
        alert('Please! Make payments');
    }
    else {
        alert('Ok! Next time');
    }
};

const askName = () => {
    const name = prompt('Whats your name?');
    if (name) {
        console.log(name);
    }
}