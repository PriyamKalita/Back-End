// let n = 5;

// for(let i = 0; i < n; i++){
//     console.log("Hello ", i);
// }

let args = process.argv;

for(let i = 2; i < args.length; i++){
    console.log("Hello To - ", args[i]);
}