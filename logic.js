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

console.log('real:');
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

// let id = 4;

// arr[id - 1].complete = false;
// console.log('\nsesudah');

// for (let i = 0; i < arr.length; i++) {
//     console.log(`${i + 1}. ${arr[i].complete ? '[x]' : '[ ]'} ${arr[i].task}`);
// };

// console.log('\nasc:');
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].complete === false) {
//         console.log(`${i + 1}. ${arr[i].complete ? '[x]' : '[ ]'} ${arr[i].task}`)
//     }
// }

// console.log('\ndesc');
// for (let j = arr.length - 1; j >= 0; j--) {
//     if (arr[j].complete === false) {
//     console.log(`${j + 1}. ${arr[j].complete ? '[x]' : '[ ]'} ${arr[j].task}`);
//     // console.log(arr[j].task);
//     }
// }

console.log('\nContoh:')
for (let i = 0; i < arr.length; i++) {
    if (arr[i].tag.includes('skills')) {
        console.log(`${arr[i].task}`)
    }
}



console.log('\nhjahahaha');


let filteran = 'filter:masak';

let ngehe = filteran.split(':');
for (let i = 0; i < arr.length; i++) {
    if (arr[i].tag.includes(ngehe[1])) {
        console.log(`${arr[i].task}`);
    }
}

// ** sebelum di ubah **
// if (myArgv[2] === 'help') {
//     console.log(msg);
//     process.exit(0);
// } else if (!myArgv[2]) {
//     console.log(msg);
//     process.exit(0);
// } else if (myArgv[2].slice(0, 6) === 'filter') {
//     let splitFilter = myArgv[2].split(':');
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].tag.includes(splitFilter[1])) {
//             console.log(`${i + 1}. ${data[i].complete ? '[x]' : '[ ]'} ${data[i].task}`);
//         }
//     }
//     process.exit(0);
// }