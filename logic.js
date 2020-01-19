const fs = require('fs');

// fs.open('message.txt', 'r', (err, fd) => {
//     console.log(fd);
// })

// let task = 'Belajar javascript';
// let arr = [];
// let output = " "
// console.log('dataData >', task.length);

// for (let i = 0; i < task.length; i++) {
//     output += task[i];
// }
// console.log('dataData >', output);
// arr.push({
//     "task": output.trim(),
//     "complete": false,
//     "tags": []
// })
// console.log(arr);

// let data = JSON.stringify(arr);
// console.log(data);

let tes = fs.readFileSync('data.json', 'utf8');

console.log('sebelum:');
let arr = JSON.parse(tes);
for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}. ${arr[i].complete ? '[x]' : '[ ]'} ${arr[i].task}`);
}

// arr.splice(id - 1, 1);
// console.log('\nsesudah:');
// for (let i = 0; i < arr.length; i++) {
//     console.log(`${i + 1}. ${arr[i].complete ? '[x]' : '[ ]'} ${arr[i].task}`);
// }

// fs.writeFileSync('data.json', JSON.stringify(arr, null, 3));

let id = 1;

arr[id - 1].complete = false;
console.log('\nsesudah');

for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}. ${arr[i].complete ? '[x]' : '[ ]'} ${arr[i].task}`);
};