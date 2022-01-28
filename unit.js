class Unit {
  constructor(type, health, distance) {
      this.type = type;
      this.health = this.maxHealth = health;
      this.distance = this.maxDistance = distance;
      this.el;

  }
  isReadyToMove() {
    return this.distance > 0;
  }
  isReadyToFight() {
    return this.health > 0;
  }
  restore() {
    this.health = this.maxDistance;
    this.distance = this.maxDistance;
  }
  getType() {
    return this.type;
  }
  clone() {
    return new Unit(this.type, this.maxHealth, this.maxDistance, this.power);
  }

  createUnit() {
    let div = document.createElement('div');
    let overlay = document.createElement('div');
    overlay.className = 'over';
    div.className = 'unit';
    let divHealth = document.createElement('div');
    divHealth.className = 'health';
    divHealth.innerText = 'Health ' + this.maxHealth + '/' + this.health;
    divHealth.style.width = `${(this.health * 100) / this.maxHealth}%`;
    let divStamina = document.createElement('div');
    divStamina.className = 'stamina';
    divStamina.innerText ='Stamina ' + this.maxDistance + '/' + this.distance;
    divStamina.style.width = `${(this.distance * 100) / this.maxDistance}%`;
    let p = document.createElement('p');
    p.className = 'character';
    p.innerHTML = `${this.type}`;
    let divImg = document.createElement('div');
    divImg.className =  p.innerHTML ;
    let img = document.createElement('img');
    img.className = 'img';
    const pictures = {
        Archer:  'icon/archer.png',
        Assassin: 'icon/assassin.png',
        Priest: 'icon/priest.png',
    }
    img.src = `${pictures[this.type]}`;
    
    
   
    document.body.append(div);
    div.appendChild(overlay);
    div.appendChild(divHealth);
    div.appendChild(divStamina);
    div.appendChild(p);
    div.appendChild(divImg);
    divImg.appendChild(img);
    divStamina.addEventListener('click', (e) => {      
      divStamina.style.width = `${this.distance = this.distance - 5}%`;
      divStamina.innerText = this.maxDistance + '/' + this.distance;
      if(this.distance < 5) {
      divStamina.style.width = '100%';
      divStamina.style.backgroundColor = 'grey';
      divStamina.style.pointerEvents = 'none';
  } 
  if(this.distance == 0){
    div.style.pointerEvents = 'none';
    overlay.style.zIndex = '2';
    overlay.style.backgroundColor = '#80808078'
  }
})
divHealth.addEventListener('click', (e) => {      
  divHealth.style.width = `${this.health = this.health - 5}%`;
  divHealth.innerText = this.maxHealth + '/' + this.health;
  if(this.health < 5) {
  divHealth.style.width = '100%';
  divHealth.style.backgroundColor = 'grey';
  divHealth.style.pointerEvents = 'none';
} 
if(this.health == 0){
  div.style.pointerEvents = 'none';
  overlay.style.zIndex = '2';
  overlay.style.backgroundColor = '#80808078'
}
})
}
}
