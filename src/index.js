const mathFunction = (x) => 4 * x - Math.pow(x, 2);

function MidpointRuleIntegration(func, a, b, n) 
{
    const deltaX = (b - a) / n;
    let sum = 0;  
    for (let i = 0; i < n; i++)
        sum += func(a + (1 + 2 * i) * deltaX / 2);

    sum *= deltaX;
    return sum;
}

alert("Let's integrate!");

const a = parseFloat(prompt("a: "));
const b = parseFloat(prompt("b: "));
const n = parseInt(prompt("Количество точек интегрирования: "));

const result = MidpointRuleIntegration(mathFunction, a, b, n);
alert(` a: ${a}\n b: ${b}\n Точек: ${n}\n Результат: ${result.toFixed(4)}`);

