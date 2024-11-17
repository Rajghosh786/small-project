let x = 6

if(x%2 === 0){
    console.log("Even")
}else{
    console.log("Odd")
}


let n = 10

for(i = 1; i <= n;i++){
  let bag = ''
  for(j = 1; j <= n;j++){
    // bag += "*"
    if(i === j){
      bag+= "*"
    }
    else if(j === 1){
      bag+= "*"
    } else if(j === 10){
      bag+= "*"
    }
    else{
      bag+= " "
    }
  }
  console.log(bag)
}