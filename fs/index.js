//fs - file system, работа с файлами системы
const fs = require("fs");

// //создаем файл
fs.writeFile("style.css", "* {background-color: black}", (error, data) => {
	if (error) throw error;
	console.log("1 fs.writeFile completed");

	//читает файл и выводит дату в консоль
	fs.readFile("style.css", "utf-8", (error, data) => {
		if (error) throw error;
		console.log("2 fs.readFile completed", data);

		//добавляет дату в конец файла
		fs.appendFile("style.css", "\nbody {color: white;}", (error, data) => {
			if (error) throw error;
			console.log("3 fs.appendFile completed");

			// Получение информации о файле
			fs.stat("style.css", (error, data) => {
				if (error) throw error;
				console.log("4 fs.statFile completed:");
				console.log(`File Size: ${data.size} bytes`);
				console.log(`Last Modified: ${data.mtime}`);

				// Переименование файла
				fs.rename("style.css", "newStyle.css", (error, data) => {
					if (error) throw error;
					console.log(
						"5 fs.rename completed: style.css renamed to newStyle.css"
					);
				});
			});
		});
	});
});



// создание новой директории и в ней файла
const dirPath = "new-folder";
const filePath = `${dirPath}/index.js`;
const fileContent = "// hello world!";

// создание директории
fs.mkdir(dirPath, { recursive: true }, (error) => {
	if (error) throw error;
	console.log(`Directory ${dirPath} created`);

	// создание файла внутри директории
	fs.writeFile(filePath, fileContent, (error) => {
		if (error) throw error;
		console.log(`File ${filePath} created`);

		//чтение директории и вывод даты в виде массива
		fs.readdir(dirPath, (error, data) => {
			if (error) throw error;
			console.log(`Content of ${dirPath}:`, data);
		});
	});
});




// удаляю файл
fs.unlink("./new-folder/index.js", (error) => {
    if (error) throw error;
    // console.log("File deleted");

    // удаляю папку
    fs.rmdir("./new-folder", (error) => {
        if (error) throw error;
    })
});



// function fibonacciSequence(limit) {
//     let sequence = [0, 1];
//     for (let i = 2; i < limit; i++) {
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }
//     return sequence;
// }

// console.log(fibonacciSequence(10));
