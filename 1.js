const temp = Number.parseInt(prompt("Insert temperature value in Celcium:"));
alert(`Temperature value in Celcium ${temp}, temperature value in faringeth ${myFunc(temp)}`);

function myFunc(temp){
    return (temp * 1.8) + 32;
}