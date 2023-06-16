const bossLvlElem = document.getElementById('level')
const bossHPElem = document.getElementById("bossHealth")
const heroHPElem = document.getElementById("heroHealth")
const gold = document.getElementById("gold")
const wolfTurns = document.getElementById('wolfTurns')
const wizardTurns = document.getElementById('wizardTurns')
const berserkerTurns = document.getElementById('berserkerTurns')
const fairyTurns = document.getElementById('fairyTurns')
const whiteMageTurns = document.getElementById('whiteMageTurns')

const hero = {
    hp: 100,
    gold: 10000,
}

const boss = {
    hp: 100,
    lvl: 1
}

const companions = [
    {
        name: `wolf`,
        type: `dmg`,
        cost: 100,
        purchasableTurns: 20,
        turnsAvailable: 0,
        value: 1

    },
    {
        name: `wizard`,
        type: `dmg`,
        cost: 300,
        purchasableTurns: 15,
        turnsAvailable: 0,
        value: 5
    },
    {
        name: `berserker`,
        type: `dmg`,
        cost: 750,
        purchasableTurns: 15,
        turnsAvailable: 0,
        value: 10
    },
    {
        name: `fairy`,
        type: `healer`,
        cost: 500,
        purchasableTurns: 15,
        turnsAvailable: 0,
        value: 2
    },
    {
        name: `white mage`,
        type: `healer`,
        cost: 1000,
        purchasableTurns: 15,
        turnsAvailable: 0,
        value: 5
    }
]

function buyWolf() {
    const wolf = companions[0]
    if (hero.gold >= wolf.cost) {
        wolf.turnsAvailable += wolf.purchasableTurns
        hero.gold -= wolf.cost
    } else {
        window.alert("Insufficient Gold")
    }
    console.log(wolf)
}

function wolfAttack() {
    wolf = companions.find(companion => companion.name == `wolf`)
    if (wolf.turnsAvailable > 0) {
        boss.hp -= wolf.value
        wolf.turnsAvailable--
        console.log(boss)
    }
}

function buyWizard() {
    const wizard = companions[1]
    if (hero.gold >= wizard.cost) {
        wizard.turnsAvailable += wizard.purchasableTurns
        hero.gold -= wizard.cost
    } else {
        window.alert("Insufficient Gold")
    }

    console.log(wizard)
}

function wizardAttack() {
    wizard = companions.find(companion => companion.name == `wizard`)
    if (wizard.turnsAvailable > 0) {
        boss.hp -= wizard.value
        wizard.turnsAvailable--
        console.log(boss)
    }
}

function buyBerserker() {
    const berserker = companions[2]
    if (hero.gold >= berserker.cost) {
        berserker.turnsAvailable += berserker.purchasableTurns
        hero.gold -= berserker.cost
    } else {
        window.alert("Insufficient Gold")
    }

    console.log(berserker)
}

function buyfairy() {
    const fairy = companions[3]
    if (hero.gold >= fairy.cost) {
        fairy.turnsAvailable += fairy.purchasableTurns
        hero.gold -= fairy.cost
    } else {
        window.alert("Insufficient Gold")
    }

    console.log(fairy)
}

function buyWhiteMage() {
    const whiteMage = companions[4]
    if (hero.gold >= whiteMage.cost) {
        whiteMage.turnsAvailable += whiteMage.purchasableTurns
        hero.gold -= whiteMage.cost
    } else {
        window.alert("Insufficient Gold")
    }

    console.log(whiteMage)
}

function companionAttack() {
    companions.forEach(companion => {
        if (companion.turnsAvailable > 0) {
            companion.turnsAvailable--
            if (companion.type == 'dmg') {
                boss.hp -= companion.value
            } else {
                hero.hp += companion.value
            }
        }
        update()
    })
}

function attack() {
    if (
        hero.hp <= 0
    ) return
    boss.hp -= 5
    if (boss.hp <= 0) {
        bossLvlUp()
    }
    console.log(boss.hp)
}

function bossLvlUp() {
    boss.lvl++
    boss.hp = boss.lvl * 100
    hero.gold += boss.lvl * 100
}

function bossAttack() {
    hero.hp -= boss.lvl * 1
    if (hero.hp <= 0) {
        hero.hp = 0
        heroDeath()
    }
}

function heroDeath() {
    window.alert(`You have been slayed!`)
    return
}

function update() {
    bossLvlElem.innerText = boss.lvl,
        bossHPElem.innerText = boss.hp,
        heroHPElem.innerText = hero.hp,
        gold.innerText = hero.gold,
        wolfTurns.innerText = companions[0].turnsAvailable,
        wizardTurns.innerText = companions[1].turnsAvailable,
        berserkerTurns.innerText = companions[2].turnsAvailable,
        fairyTurns.innerText = companions[3].turnsAvailable,
        whiteMageTurns.innerText = companions[4].turnsAvailable
}


setInterval(bossAttack, 2000)
setInterval(companionAttack, 1000)