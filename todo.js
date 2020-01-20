// challange 13 Rubicamp: Daftar Kerjaan (todo)

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
$ node todo.js filter:<tag_name>`

switch (myArgv[2]) {
    case 'add':
        if (!myArgv[3]) {
            console.log('tolong masukkan aktivitas.');
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
        if (data.length === 0) {
            console.log('Daftar pekerjaan tidak ada, silahkan add daftar pekerjaan.');
            process.exit(0);
        } else {
            console.log('Daftar Pekerjaan');
            for (let i = 0; i < data.length; i++) {
                console.log(`${i + 1}. ${data[i].complete ? '[x]' : '[ ]'} ${data[i].task}`);
            }
        }
        break;

    case 'delete':
        if (!myArgv[3]) {
            console.log('masukkan id yang akan dihapus');
            process.exit(0);
        } else if (myArgv[3] > data.length) {
            console.log('id yang anda masukkan tidak ada.');
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
        } else if (myArgv[3] > data.length) {
            console.log('id yang anda masukkan tidak ada.');
        } else {
            console.log(`"${data[myArgv[3] - 1].task}" telah selesai.`);
            data[myArgv[3] - 1].complete = true;
            fs.writeFileSync('data.json', JSON.stringify(data, null, 3));
        }
        break;

    case 'tag':
        if (!myArgv[3]) {
            console.log('Tolong masukkan id task nya!');
            process.exit(0);
        } else if (myArgv[3] > data.length) {
            console.log('id yang anda masukkan tidak ada.');
        } else {
            for (let i = 4; i < myArgv.length; i++) {
                data[myArgv[3] - 1].tag.push(myArgv[i]);
            }
            console.log(`Tag '${data[myArgv[3]-1].tag}' telah ditambahkan ke daftar '${data[myArgv[3]-1].task}'`)
            fs.writeFileSync('data.json', JSON.stringify(data, null, 3));
        }
        break;

    case 'uncomplete':
        if (!myArgv[3]) {
            console.log('Masukkin id task nya bro!');
            process.exit(0);
        } else if (myArgv[3] > data.length) {
            console.log('id yang anda masukkan tidak ada.');
        } else {
            if (data[myArgv[3] - 1].complete == false) {
                console.log(`"${data[myArgv[3] - 1].task}" belum selesai, cari yang sudah selesai.`);
                process.exit(0);
            } else {
                console.log(`"${data[myArgv[3] - 1].task}" status selesai dibatalkan.`);
                data[myArgv[3] - 1].complete = false;
                fs.writeFileSync('data.json', JSON.stringify(data, null, 3));
            }
        }
        break;

    case 'list:outstanding':
        if (myArgv[3] === 'asc') {
            console.log('Daftar Pekerjaan');
            for (let i = 0; i < data.length; i++) {
                if (data[i].complete === false) {
                    console.log(`${i + 1}. ${data[i].complete ? '[x]' : '[ ]'} ${data[i].task}`)
                }
            }
        } else if (myArgv[3] === 'desc') {
            console.log('Daftar Pekerjaan');
            for (let j = data.length - 1; j >= 0; j--) {
                if (data[j].complete === false) {
                    console.log(`${j + 1}. ${data[j].complete ? '[x]' : '[ ]'} ${data[j].task}`);
                }
            }
        } else {
            console.log('Tolong masukkan "asc" atau "desc"')
        }
        break;

    case 'list:complete':
        if (myArgv[3] === 'asc') {
            console.log('Daftar Pekerjaan');
            for (let i = 0; i < data.length; i++) {
                if (data[i].complete) {
                    console.log(`${i + 1}. ${data[i].complete ? '[x]' : '[ ]'} ${data[i].task}`)
                }
            }
        } else if (myArgv[3] === 'desc') {
            console.log('Daftar Pekerjaan');
            for (let j = data.length - 1; j >= 0; j--) {
                if (data[j].complete) {
                    console.log(`${j + 1}. ${data[j].complete ? '[x]' : '[ ]'} ${data[j].task}`);
                }
            }
        } else {
            console.log('Tolong masukkan "asc" atau "desc"')
        }
        break;

    default:
        if (myArgv[2]) {
            if (myArgv[2].slice(0, 6) === 'filter') {
                let splitFilter = myArgv[2].split(':');
                for (let i = 0; i < data.length; i++) {
                    if (data[i].tag.includes(splitFilter[1])) {
                        console.log(`${i + 1}. ${data[i].complete ? '[x]' : '[ ]'} ${data[i].task}`);
                    }
                }
                process.exit(0);
            } else if (myArgv[2] === 'help') {
                console.log(msg);
                process.exit(0);
            } else {
                console.log('argument not found, see "help"')
            }
        } else {
            console.log(msg);
            process.exit(0);
        }
}