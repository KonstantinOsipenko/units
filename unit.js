class Unit {
  constructor(type, health, distance, power) {
    this.type = type;
    this.health = this.maxHealth = health;
    this.distance = this.maxDistance = distance;
    this.power = power;
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
  getStat() {
    let unitHealth = document.getElementsByClassName("health");
    for (let i of unitHealth) {
      i.style.width = `${(this.health * 100) / this.maxHealth}%`;
    }
    let unitStamina = document.getElementsByClassName("stamina");
    for (let i of unitStamina) {
      i.style.width = `${(this.distance * 100) / this.maxDistance}%`;
    }
  }
  changeHealth() {
    this.health -= 5;
    this.getStat();
  }
  changeStamina() {
    this.distance -= 5;
    this.getStat();
  }
}
