function counter(n) {
    console.log(n);
    setTimeout(() => {
        counter(n + 1)
    }, 0)
}

counter(0);

setTimeout(() => {
    console.log("Yep!");
    process.exit();
}, 1000);


stack:
    counter(0);
console.log(0);

stack1:
    counter(0);

stack2:
    counter(0);
setTimeout({ eventLoop }:
    timer => 0; callback => counter(1);
)

stack3:
    counter(0);

stack4:
    setTimeout({ eventLoop }:
        timer => 1000 ms; callback =>
        console.log("Yep!") process.exit();
    );

stack5: { empty }

stack6:
    callback => counter(1);

stack7:
    callback
counter(1);

stack8:
    callback
counter(1);
console.log(1);

stack9:
    callback
counter(1);

stack10:
    callback
counter(1);
setTimeout({ eventLoop }:
    timer => 0; callback => counter(2);
)

...

stackX:
    console.log("Yep!")
process.exit()