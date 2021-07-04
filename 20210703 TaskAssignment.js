  let tasks = [1, 3, 5, 3, 1, 4]
  let k = 3

  let arrayWithObject = tasks.map((element, index)=>{index = index.toString(); return {[index]: element}})
  console.log(arrayWithObject)

  console.log(Object.values(arrayWithObject[1]))

  arrayWithObject.sort((a, b)=>{ return (Object.values(a)[0] - Object.values(b)[0])})

  console.log(arrayWithObject)

  let combination = []
  for (i = 0 ; i < k; i++) {
    combination.push([arrayWithObject[i], arrayWithObject[arrayWithObject.length - 1 - i]])
  }

  console.log(combination)

  let result = combination.map(element => {return [Number(Object.keys(element[0])[0]), Number(Object.keys(element[1])[0])]})

  console.log(result)
