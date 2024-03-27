//your JS code here. If required.
const tbody = document.getElementById('output');


function rowCreation(i){
	const row = document.createElement("tr");
	row.id=`r${i}`;
const td1 = document.createElement("td");
	td1.id = `${i}1`;
	td1.innerText = 'Loading...';
const td2 = document.createElement("td");
	td2.id = `${i}2`;
	td2.innerText = 'Loading...';
	row.append(td1,td2);
	tbody.appendChild(row);
}

let arrProm = [];
for(let i=0;i<3;i++){
rowCreation(i);

	const delay = Math.random()*3000;
	const prom = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve([`Promise ${i+1}`,delay])
		},delay); 
	}); 
	arrProm.push(prom);
}
rowCreation(4); 

let promises;
Promise.all(arrProm) 
    .then((results) => {
		promises = results;
        console.log('All promises resolved successfully:', results);
		let n = promises.length;
console.log(promises); 

		let total = 0;
for(let i = 0;i<n;i++){
		const row = document.getElementById(`r${i}`);
		let childs = row.childNodes;
		childs[0].innerText = promises[i][0];
	const secs = promises[i][1];
		childs[1].innerText = parseInt(secs/1000);
		total +=secs;
}    
		const row = document.getElementById(`r4`);
		let childs = row.childNodes;
		childs[0].innerText = 'Total';
		childs[1].innerText = total;
		
    })
    .catch((error) => {
        console.error('Error in one of the promises:', error);
    });



