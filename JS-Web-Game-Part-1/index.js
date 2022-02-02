function newImage(imgs, left, bottom){
    let image = document.createElement('img')
    image.src = imgs;
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image;
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)


function newItem(imgs, left, bottom){
    let item = newImage(imgs, left, bottom)
    item.addEventListener('dblclick', function(){
        item.remove()
        let Weapons = document.createElement('img')
        Weapons.src = imgs;
        weapon.append(Weapons)
    })
}

newItem('assets/sword.png', 500, 405);
newItem('assets/sheild.png', 165, 185);
newItem('assets/staff.png', 600, 100);
newItem('assets/crate.png', 150, 200);

//////--------------------------------------------------------------------------------///

function newGrass (imgs,left, bottom){
    let image = document.createElement('img')
    image.src = imgs;
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image;
 
}

//newGrass('assets/grass.png', 150, 700)
//for ( i=0; i<10;i++) {
//    if (i%2 !==0)
//    console.log('assets/grass.png')    
//}
newGrass('assets/grass.png', 250, 500)
newGrass('assets/grass.png', 150, 700)




