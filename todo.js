// challange 13 Rubicamp: Daftar Kerjaan (todo)

const readline = require('readline');
const fs = require('fs');
let parse = fs.readFileSync('data.json', 'utf8');
let data = JSON.parse(parse);

let myArgv = process.argv;
let msg = `>>> JS TODO <<<
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task_id>
$ node todo.js add <task_content>
$ node todo.js delete <task_id> 
$ node todo.js complete <task_id> 
$ node todo.js uncomplete <task_id> 
$ node todo.js list:outstanding  asc|desc
$ node todo.js list:completed asc|desc
$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
$ node todo.js list `

switch (myArgv[2]) {
    case 'add':
        if (!myArgv[3]) {
            console.log('Masukkan aktivitas.');
            process.exit();
        } else {
            let output = ' ';
            for (let i = 3; i < myArgv.length; i++) {
                output += myArgv[i] + ' ';
            }
            data.push({
                "task": output.trim(),
                "complete": false,
                "tag": []
            });
            console.log(`"${output.trim()}" telah ditambahkan.`);
            fs.writeFileSync('data.json', JSON.stringify(data, null, 3));
        }
        break;

    case 'list':
        console.log('Daftar Pekerjaan');
        for (let i = 0; i < data.length; i++) {
            console.log(`${i + 1}. ${data[i].complete ? '[x]' : '[ ]'} ${data[i].task}`);
        }
        break;

    case 'delete':
        if (!myArgv[3]) {
            console.log('masukkan id yang akan dihapus');
            process.exit(0);
        } else {
            console.log(`"${data[myArgv[3] - 1].task}" telah dihapus dalam daftar.`);
            data.splice(myArgv[3] - 1, 1);
        }

        fs.writeFileSync('data.json', JSON.stringify(data, null, 3));
        break;

    case 'complete':
        if (!myArgv[3]) {
            console.log('add your id list!');
            process.exit(0);
        } else {
            console.log(`"${data[myArgv[3] - 1].task}" telah selesai.`);
            data[myArgv[3] - 1].complete = true;
            fs.writeFileSync('data.json', JSON.stringify(data, null, 3));
        }
        break;

    case 'tag':
        console.log('ini tag');
        break;

    case 'uncomplete':
        if (!myArgv[3]) {
            console.log('Masukkin id task nya bro!');
            process.exit(0);
        } else {
            console.log(`"${data[myArgv[3] - 1].task}" status selesai dibatalkan.`);
            data[myArgv[3] - 1].complete = false;
            fs.writeFileSync('data.json', JSON.stringify(data, null, 3));
        }
        break;

        case 'help':
        default:
            console.log(msg);
}