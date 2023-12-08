let fs = require('fs')

const content = " add variable in string block tags iam add content from variable iam her writing file with the program innode js with local files access  from the help os fs module"
//fs.writeFile('sunilc.txt', `${content}`, (error, file)=> {
//    if(error){ console.log(error)}
//    console.log("file has been crated")
//});



fs.readFile('sunilc.txt', (error, file_content)=> {
    if(error){ console.log(error)}
    console.log(file_content)
});