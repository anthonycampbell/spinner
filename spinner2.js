let frames = ['|', '/', '-', '\\'];
for (let i = 100; i < 1800; i += 200){
  setTimeout(() => process.stdout.write(`\r${frames[(i-100)/200]}`), i);
}
process.stdout.write('\n');