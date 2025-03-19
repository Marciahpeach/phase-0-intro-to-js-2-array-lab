// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"]
console.log(cats)

function destructivelyAppendCat(Ralph){
cats.push('Ralph')
}

function destructivelyPrependCat(Bob){
cats.unshift(Bob)
}

function destructivelyRemoveLastCat(){
  cats.pop()
}

function destructivelyRemoveFirstCat(){
  cats.shift()
}

function appendCat(Broom){
  return[...cats,'Broom']
}

function prependCat(Arnold){
return['Arnold', ...cats]
}

function removeLastCat(Garfield){
  return cats.slice(0,-1)
}

function removeFirstCat(Milo){
  return cats.slice(1)

}
