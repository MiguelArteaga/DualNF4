contador=0;
for (i=2;i<process.argv.length;i++){
	contador+=Number(process.argv[i])
	}
console.log(contador)

