/*a

@title: papermc
@author: nulladmin1
@tags: []
@addedOn: 2024-12-24
*/

// The player sprite
const player = "p"

// Different blocks in the game
const grass = "g"
const wood = "w"
const planks = "o"
const leaves = "l"
const cobblestone = "c"
const tnt = "t"
const glass = "d"
const dirt = "j"
const stairs = "h"
const stairso = "m"
const exploding ="9"
const explosion = "0"

// The sky
const sky = "s"

// Black screen in the beginning
const black = "b"

// Gravity
let gravity = 1

//health
let health = 20 

//delay
let delay = 200

// The direction the player is facing
let direction = "down"

setLegend(
  [player, bitmap`
................
.....CCCCCC.....
.....CFFFFC.....
.....F5FF5F.....
.....FFFFFF.....
.....F0000F.....
.....FFFFFF.....
...DDDDDDDDDD...
...FFDDDDDDFF...
...FFDDDDDDFF...
...FFDDDDDDFF...
...FFDDDDDDFF...
.....55555D.....
.....555555.....
.....55..55.....
.....55..55.....`],
  [grass, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
CDDDCCCCCCCDCCCD
CCDCCCCCCCCDCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [wood, bitmap`
CC0CCCCCCCCCCCCC
CC0C0CCCC00CCC0C
CC0C0C0CC0CCCC0C
CC0C0C0CC00CCC0C
CC0C0C00CCC0CCCC
CC0CCCC0CCC0CCCC
CC0CCCC0CCC00CCC
CC0CCCC0CCCC0C0C
CC0CCCCCC0CCCC0C
C0CC0CCC00CCCC0C
C00C0CC00CCCCC0C
CC0C0CCCCCCC000C
C0CCC0CC00CC0CCC
C0CCC0CC0CC00CCC
C0CCC0CC0CC0CCCC
CCCCC0CC0CC0CC0C`],
  [planks, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF`],
  [leaves, bitmap`
DDDDDDDDDDDDDDDD
D..DDD.DDDDD...D
DD.DDDD.DD.D.DDD
D.D.DDDD.D.DD.DD
D.D.DD.DD.D.D.DD
D.DD.D.DDD.D.D.D
D..D.D.DD.DD.DDD
DDD.D..DD.DDD.DD
D.DD.DDD.D.DD.DD
D..DD.D.DDD.DDDD
DD.DDD.D.DDD..DD
DDD.D..DD..DDD.D
DDD..DDDDDD.D.DD
D.D.DDDD...DD.DD
D.......DDD..DDD
DDDDDDDDDDDDDDDD`],
  [cobblestone, bitmap`
111111111LLL1111
1LL1111111L11LL1
1LL1LLLL11111LL1
1L11LLLL111111L1
1111LLLL111LLL11
L111111111LLL11L
L111LL1L11LLL11L
111LLL1L11111111
111LLL111LLLL111
1LL11L11LLLLL1L1
1LL11L11LLLLLLL1
111L11111LLL1LL1
11LLL1LL11111LL1
11LLL1LL11111111
11LLL1LL11LLLL11
111111111LLLLLL1`],
  [tnt, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
2200020220200022
2220220020220222
2220220200220222
2220220220220222
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`],
  [glass, bitmap`
LLLLLLLLLLLLLLLL
LL...........LLL
L........22...LL
L..........2...L
L........2..2..L
L.........2.2..L
L..............L
L..............L
L..............L
L..............L
L..............L
L..............L
L..............L
L..............L
LL............LL
LLLLLLLLLLLLLLLL`],
  [sky, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [black, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [dirt, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [stairs, bitmap`
77777777777777CC
77777777777777CC
777777777777FFFF
777777777777FFFF
7777777777CCCCCC
7777777777CCCCCC
77777777FFFFFFFF
77777777FFFFFFFF
777777CCCCCCCCCC
777777CCCCCCCCCC
7777FFFFFFFFFFFF
7777FFFFFFFFFFFF
77CCCCCCCCCCCCCC
77CCCCCCCCCCCCCC
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF`],
  [stairso, bitmap`
CC..............
CC..............
FFFF............
FFFF............
CCCCCC..........
CCCCCC..........
FFFFFFFF........
FFFFFFFF........
CCCCCCCCCC......
CCCCCCCCCC......
FFFFFFFFFFFF....
FFFFFFFFFFFF....
CCCCCCCCCCCCCC..
CCCCCCCCCCCCCC..
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF`],
  [exploding, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
22LLL2L22L2LLL22
222L22LL2L22L222
222L22L2LL22L222
222L22L22L22L222
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [explosion, bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
2211121221211122
2221221121221222
2221221211221222
2221221221221222
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`]
)

let currentBlockIndex = 0
const blocks = {
  grass: "g",
  wood: "w",
  planks: "o",
  leaves: "l",
  cobblestone: "c",
  tnt: "t",
  glass: "d",
  dirt: "j",
  stairs: "h"
}
// Levels
let level = 4
const levels = [
  map`
bbbbbbbbbb
bbbbbbbbbb
bbbbbbbbbb
bbbbbbbbbb
bbbbbbbbbb
bbbbbbbbbb`,
  map`
..........
.....lll..
.p...lll..
....llwll.
....llwll.
......w...
gggggggggg
cccccccccc`,
  map`
....................
....................
....................
....................
..lll...............
..lll........hom....
.llwll......hooom...
.llwll......w...w...
gg.w............d...
jjggggggg......pw...
jjjjjjjjjgggwooowggg
ccjjjjjjjjjjjjjjjjjj
cccccccccjjjjjjjjjjj
cccccccccccccccccccc
cccccccccccccccccccc
cccccccccccccccccccc`,
  map`
tttttttttttttttttttttttttttttttttttttttp
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt
tttttttttttttttttttttttttttttttttttttttt`,
  map`
.....t.t.t..........
.t.t.t...t.t...t.t.t
....................
.t.t.t.t...t.t.t...t
..ltl...............
..lll..t...t.htm.t.t
.tltll......hotom...
tllwll.t.t.tw...w..t
gg.t..........t.t...
tjggggttg..t.t.pw..t
jjjtjjjjjgggwooowggg
cctjjjjtjtjtjtjtjtjt
cccccccccjjjjjjjjjjj
tctctcctccctccccccct
ccccccccttctctctctct
cctctccccccccccccccc`,
]

setSolids([player, ...Object.values(blocks), stairso, exploding, explosion])

// Set background
setBackground(sky);

// Gravity
function applyGravity() {
  const playerSprite = getFirst(player)
  if (playerSprite) {
    const belowTile = getTile(playerSprite.x, playerSprite.y + 1)
    if (!belowTile.some(sprite => Object.keys(blocks).includes(sprite))) {
      playerSprite.y += gravity
    }
  }
}
// Start screen
setMap(levels[level])

addText("Controls:", {
  x: 1,
  y: 1,
  color: color`2`,
})

addText("WASD - to move", {
  x: 2,
  y: 2,
  color: color`2`,
})

addText("\nK, L - \nto place, destroy \nblocks", {
  x: 2,
  y: 3,
  color: color`2`,
})

addText("\nI - \ncycle through\nblocks", {
  x: 2,
  y: 7,
  color: `2`,
})

addText("\nJ - reset map", {
  x: 2,
  y: 11,
  color: color`2`
})

setPushables({
  [player]: []
})

// Start Game Function
function startGame() {
  clearText()
  level = 1
  setMap(levels[level])
}

function getCurrentBlock() {
  return Object.values(blocks)[currentBlockIndex]
}

// Gravity interval
let gravityInterval = setInterval(applyGravity, 300)

function breakblock(bx,by){
  try{
  b = getTile(bx, by)[0].type
  console.log(b)
  
  if(b!="p"){
    clearTile(bx, by)
  }
  
  if (b == "t"){
    setTimeout(function(){
      try{clearTile(bx, by)}catch{}
      addSprite(bx,by,"9")
      
      setTimeout(function(){
        try{clearTile(bx, by)}catch{}
        addSprite(bx,by,"0")
      }, delay)
      
    }, delay-100)
    
    
    
    setTimeout(function(){
      for(x=-1;x<2;x++){
        try{
        b = getTile(bx+x, by+1)[0].type
        if(b!="p"){
          try{breakblock(bx+x, by+1)}catch{}  
        }}catch{}
      }
      for(x=-1;x<2;x++){
        try{
        b = getTile(bx+x, by-1)[0].type
        if(b!="p"){
          try{breakblock(bx+x, by-1)}catch{} 
        }}catch{}
      }
      for(x=-2;x<3;x++){
        try{
        b = getTile(bx+x, by)[0].type
        if(b!="p"){
          try{breakblock(bx+x, by)}catch{}     
        }}catch{}
      }
      for(x=-2;x<3;x++){
        try{
        b = getTile(bx, by+x)[0].type
        if(b!="p"){
          try{breakblock(bx, by+x)}catch{}    
        }}catch{}
      }
    }, delay+300)
    
  }}catch{}
}

// Movement Keys
onInput("w", () => {
  if (level == 0) startGame()
  clearText()
  const playerSprite = getFirst(player)
  if (playerSprite) {
    const aboveTile = getTile(playerSprite.x, playerSprite.y - 1)
    const isSolidAbove = aboveTile.some(sprite => Object.keys(blocks).includes(sprite))
    if (!isSolidAbove) {
      playerSprite.y -= 1
      direction = "up"
    }
  }
})


onInput("a", () => {
  if (level == 0) startGame()
  clearText()
  playerSprite = getFirst(player)
  playerSprite.x -= 1
  if (playerSprite) {
    const leftTile = getTile(playerSprite.x - 1, playerSprite.y)
    const isSolidLeft = leftTile.some(sprite => Object.keys(blocks).includes(sprite))
    if (!isSolidLeft) {
      direction = "left"
    }
  }
})

onInput("d", () => {
  if (level == 0) startGame()
  clearText()
  playerSprite = getFirst(player)
  playerSprite.x += 1

  if (playerSprite) {
    const rightTile = getTile(playerSprite.x + 1, playerSprite.y)
    const isSolidRight = rightTile.some(sprite => Object.keys(blocks).includes(sprite))
    if (!isSolidRight) {
      direction = "right"
    }
  }
})

onInput("s", () => {
  if (level == 0) startGame()
  clearText()
  const playerSprite = getFirst(player)
  if (playerSprite) {
    const belowTile = getTile(playerSprite.x, playerSprite.y + 1)
    const isSolidBelow = belowTile.some(sprite => Object.keys(blocks).includes(sprite))
    if (!isSolidBelow) {
      direction = "down"
    }
  }
})

// Place block
onInput("k", () => {
  if (level == 0) startGame()
  clearText()
  const playerSprite = getFirst(player)
  if (playerSprite) {
    let targetX = playerSprite.x
    let targetY = playerSprite.y

    if (direction === "up") {
      targetY -= 1
    } else if (direction === "down") {
      targetY += 1
    } else if (direction === "left") {
      targetX -= 1
    } else if (direction === "right") {
      targetX += 1
    }

    const targetTile = getTile(targetX, targetY)
    const isTargetEmpty = targetTile.length === 0

    if (isTargetEmpty) {
      addSprite(targetX, targetY, getCurrentBlock())
    }
  }
})

// Destroy block
onInput("l", () => {
  if (level == 0) startGame()
  clearText()
  const playerSprite = getFirst(player)
  if (playerSprite) {
    let targetX = playerSprite.x
    let targetY = playerSprite.y

    if (direction === "up") {
      targetY -= 1
    } else if (direction === "down") {
      targetY += 1
    } else if (direction === "left") {
      targetX -= 1
    } else if (direction === "right") {
      targetX += 1
    }

    const targetTile = getTile(targetX, targetY)
    const isTargetEmpty = targetTile.length === 0

    if (!isTargetEmpty) {
      breakblock(targetX, targetY)
    }
  }
})

// Cycle through available blocks
onInput("i", () => {
  if (level == 0) startGame()
  clearText()
  currentBlockIndex = (currentBlockIndex + 1) % Object.keys(blocks).length
  addText("Current block: ", {
    x: 3,
    y: 4,
    color: color`3`
  })
  addText(Object.keys(blocks)[currentBlockIndex], {
    x: 3,
    y: 5,
    color: color`5`
  })
})

// Reset Level
onInput("j", () => {
  if (level == 0) startGame()
  const currentLevel = levels[level];

  if (currentLevel !== undefined) {
    clearText();
    setMap(currentLevel);
  }
});

afterInput(() => {})
