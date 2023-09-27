const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
//Setting the resolution
canvas.width = 1024
canvas.height = 576
const searchParams = new URLSearchParams(window.location.search);
var currentLocation = window.location;

let params = new URL(currentLocation).searchParams;
let i = 0;
let nme = searchParams.get('username');
let fgt = searchParams.get('room');
console.log(fgt);
let fight = [[8, 7, 2, 2, 8, 3, 8], [7, 7, 3, 3, 10, 3, 8], [7, 9, 3, 3, 11, 4, 8], [6, 6, 2, 2, 4, 4, 8], [6, 11, 3, 3, 10, 3, 8]];
window.tranfer(fgt);


//Selecting the avatar
function tranfer(b) {

  switch (b) {
    case "evilwizard":
      i = 0;
      break;
    case "fantasywarrior":
      i = 1;
      break;
    case "heroknight":
      i = 2;
      break;
    case "martialhero":
      i = 3;
      break;
    case "wizard":
      i = 4;
      break;
  }

}
c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7 //gravity

//background, player & enemy object constructor class
const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './asset/img/background.png'
})

const shop = new Sprite({
  position: {
    x: 600,
    y: 128
  },
  imageSrc: './asset/img/shop.png',
  scale: 2.75,
  framesMax: 6
})

const player = new Fighter({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './asset/img/' + fgt + '/Idle.png',
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 0,
    y: 350
  },
  sprites: {
    idle: {
      imageSrc: './asset/img/' + fgt + '/Idle.png',
      framesMax: fight[i][4]
    },
    run: {
      imageSrc: './asset/img/' + fgt + '/Run.png',
      framesMax: fight[i][6]
    },
    jump: {
      imageSrc: './asset/img/' + fgt + '/Jump.png',
      framesMax: fight[i][2]
    },
    fall: {
      imageSrc: './asset/img/' + fgt + '/Fall.png',
      framesMax: fight[i][3]
    },
    attack1: {
      imageSrc: './asset/img/' + fgt + '/Attack1.png',
      framesMax: fight[i][0]
    },
    takeHit: {
      imageSrc: './asset/img/' + fgt + '/Take hit.png',
      framesMax: fight[i][5]
    },
    death: {
      imageSrc: './asset/img/' + fgt + '/Death.png',
      framesMax: fight[i][1]
    },
    idlem: {
      imageSrc: './asset/img/' + fgt + '/Idlem.png',
      framesMax: fight[i][4]
    },
    runm: {
      imageSrc: './asset/img/' + fgt + '/Runm.png',
      framesMax: fight[i][6]
    },
    jumpm: {
      imageSrc: './asset/img/' + fgt + '/Jumpm.png',
      framesMax: fight[i][2]
    },
    fallm: {
      imageSrc: './asset/img/' + fgt + '/Fallm.png',
      framesMax: fight[i][3]
    },
    attack1m: {
      imageSrc: './asset/img/' + fgt + '/Attack1m.png',
      framesMax: fight[i][0]
    },
    takeHitm: {
      imageSrc: './asset/img/' + fgt + '/Take hitm.png',
      framesMax: fight[i][5]
    },
    deathm: {
      imageSrc: './asset/img/' + fgt + '/Deathm.png',
      framesMax: fight[i][1]
    }
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50
    },
    width: 160,
    height: 50
  }
})

const enemy = new Fighter({
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: './asset/img/' + fgt + '/Idlem.png',
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 0,
    y: 350
  },
  sprites: {
    idle: {
      imageSrc: './asset/img/' + fgt + '/Idle.png',
      framesMax: fight[i][4]
    },
    run: {
      imageSrc: './asset/img/' + fgt + '/Run.png',
      framesMax: fight[i][6]
    },
    jump: {
      imageSrc: './asset/img/' + fgt + '/Jump.png',
      framesMax: fight[i][2]
    },
    fall: {
      imageSrc: './asset/img/' + fgt + '/Fall.png',
      framesMax: fight[i][3]
    },
    attack1: {
      imageSrc: './asset/img/' + fgt + '/Attack1.png',
      framesMax: fight[i][0]
    },
    takeHit: {
      imageSrc: './asset/img/' + fgt + '/Take hit.png',
      framesMax: fight[i][5]
    },
    death: {
      imageSrc: './asset/img/' + fgt + '/Death.png',
      framesMax: fight[i][1]
    },
    idlem: {
      imageSrc: './asset/img/' + fgt + '/Idlem.png',
      framesMax: fight[i][4]
    },
    runm: {
      imageSrc: './asset/img/' + fgt + '/Runm.png',
      framesMax: fight[i][6]
    },
    jumpm: {
      imageSrc: './asset/img/' + fgt + '/Jumpm.png',
      framesMax: fight[i][2]
    },
    fallm: {
      imageSrc: './asset/img/' + fgt + '/Fallm.png',
      framesMax: fight[i][3]
    },
    attack1m: {
      imageSrc: './asset/img/' + fgt + '/Attack1m.png',
      framesMax: fight[i][0]
    },
    takeHitm: {
      imageSrc: './asset/img/' + fgt + '/Take hitm.png',
      framesMax: fight[i][5]
    },
    deathm: {
      imageSrc: './asset/img/' + fgt + '/Deathm.png',
      framesMax: fight[i][1]
    }
  },
  attackBox: {
    offset: {
      x: -170,
      y: 50
    },
    width: 170,
    height: 50
  }
})

console.log(player)

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}

decreaseTimer()

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  shop.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  // player movement

  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5
    player.switchSprite('runm')
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
    player.switchSprite('run')
  } else if (!keys.d.pressed && !keys.a.pressed && player.lastKey === 'd') {
    player.switchSprite('idle')
  } else if (!keys.d.pressed && !keys.a.pressed && player.lastKey === 'd') {
    player.switchSprite('idlem')
  } else {
    player.switchSprite('idle')
  }

  // jumping
  if (player.velocity.y < 0 && player.lastKey === 'd') {
    player.switchSprite('jump')
  } else if (player.velocity.y > 0 && player.lastKey === 'd') {
    player.switchSprite('fall')
  } else if (player.velocity.y > 0 && player.lastKey === 'a') {
    player.switchSprite('fallm')
  } else if (player.velocity.y < 0 && player.lastKey === 'a') {
    player.switchSprite('jumpm')
  }

  // Enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5
    enemy.switchSprite('runm')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5
    enemy.switchSprite('run')
  } else if (!keys.ArrowRight.pressed && !keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.switchSprite('idle')
  } else if (!keys.ArrowRight.pressed && !keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.switchSprite('idlem')
  } else {
    enemy.switchSprite('idlem')
  }

  // jumping
  if (player.velocity.y < 0 && player.lastKey === 'ArrowRight') {
    enemy.switchSprite('jump')
  } else if (enemy.velocity.y > 0 && player.lastKey === 'ArrowLeft') {
    enemy.switchSprite('fall')
  } else if (enemy.velocity.y > 0 && player.lastKey === 'ArrowRight') {
    enemy.switchSprite('fallm')
  } else if (enemy.velocity.y < 0 && player.lastKey === 'ArrowRight') {
    enemy.switchSprite('jumpm')
  }

  // detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    enemy.takeHit()
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit()
    enemy.isAttacking = false

    gsap.to('#playerHealth', {
      width: player.health + '%'
    })
  }

  // if player misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId })
  }
}

animate()

window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
      case 'w':
        player.velocity.y = -20
        break
      case ' ':
        player.attack()
        break
    }
  }

  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        break
      case 'ArrowDown':
        enemy.attack()

        break
    }
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})