const File = require("./File");
const Directory = require("./Directory");

// Tạo file
const file1 = new File("file1.txt", "Hello");
const file2 = new File("file2.txt", "World");
const file3 = new File("file3.txt", "!!!");

// Tạo thư mục
const root = new Directory("root");
const folder1 = new Directory("folder1");
const folder2 = new Directory("folder2");

// Xây cây
folder1.add(file1);
folder1.add(file2);

folder2.add(file3);

root.add(folder1);
root.add(folder2);

// Hiển thị
root.display();