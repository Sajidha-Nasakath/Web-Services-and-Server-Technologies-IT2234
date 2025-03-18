//ARRAY
let ARRAY = [10,20,30,80,50];
console.log(ARRAY);

let array = ["UOV",2021,'V'];
console.log(array);


for(let i=0; i<ARRAY.length; i++){
	console.log(ARRAY[i])
}

ARRAY.forEach((n) =>{
	console.log(n)
})

//Find the maximum number in the array using forEach
let max = 0
ARRAY.forEach((n)=>{
	/*if(max<n){
		max=n
	}*/
	(max<n)&&(max=n)
})
console.log("Max is " + max)


//print the nested array [[1,2,30],[5,6],[8,5,3]]
let nestedArray = [[1,2,30],[5,6],[8,5,3]]
nestedArray.forEach((n)=>{
	n.forEach((i)=>{
		console.log(i)
		}
	)
})
nestedArray.forEach((n)=>{
	console.log(n)
})


/*
a=[4,5,6,3,7]
b=[8,3,2,1,5]
find the common elements between a and b
*/
let a=[4,5,6,3,7]
let b=[8,3,2,1,5]


for(let x=0; x<a.length; x++){
	for(let y=0; y<b.length; y++){
		if(a[x]==b[y])
			console.log(a[x])
	}
}

//arr=[1,2,3,4,5,6]
//target = 7
//write a code to find all pairs that sum up to the target
let arr=[1,2,3,4,5,6]
let target=7
for(let i=0;i<arr.length;i++){
	for(let x=0;x<arr.length;x++){
		if(arr[i]+arr[x]==target){
			console.log([arr[i]+" "+arr[x]])
		}
	}
}

//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array
let arr1=[4,8,3,4,3,2,1,8,4]
let count = 0
for(let i=0;i<arr1.length;i++){
	for(let j=0; j<arr.length;j++){
		if(arr[i] == arr[j]){
			count = count+1
		}
	}
}

//Array operation
//push
arr2=['a','b','d']
console.log(arr2)
arr2.push('e')
console.log(arr2)
arr2.pop()
console.log(arr2)

//reverse the array using push and pop
//a b c d -> d c b a

arr3=['a','b','c','d']

for(let i=0; i<=arr3.length; i++){
	console.log(arr3.pop())
}
console.log(arr3.length)

//JSON
//{key:value}
let student = {regno:'2021/ICT/01',names:'James',age:21,course:'IT',skills:['JAVA',"JS",'C++']}
console.log(student)
console.log(student.name)
let students=[
{regno:'2021/ICT/01',names:'James',age:21,course:'IT'},
{regno:'2021/ICT/02',names:'Jame',age:22,course:'IT'},
{regno:'2021/ICT/03',names:'Joe',age:23,course:'IT'}
]
console.log(students)
