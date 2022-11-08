arr = [];

branches = 3;

class point {
  x = 0;
  y = 0;

  xn = [];
  yn = [];

  r = 0;
  aTo0 = 0;
  constructor(a, speed) {
    this.a = a;
    this.speed = speed;
  }
  update() {
    this.a += this.a / 100;
    this.x += Math.cos(this.a) * this.speed;
    this.y += Math.sin(this.a) * this.speed;

    this.aTo0 = Math.atan2(this.x, this.y);
    this.r = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));

    this.xn = [];
    this.yn = [];
    for (let an = 0; an < Math.PI * 2; an += Math.PI / 1.5) {
      for (let c = 1; c <= branches; c++) {
        this.xn.push(Math.cos(this.aTo0 + an) * this.r * c);
        this.yn.push(Math.sin(this.aTo0 + an) * this.r * c);
      }
    }
  }
}

for (i = 0; i < Math.PI * 1; i += Math.PI / 1000) {
  arr.push(new point(i, i));
}

function draw() {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr[3].xn.length; j++) {
      drawLine(
        arr[i].xn[j] + window.innerWidth / 2,
        arr[i].yn[j] + window.innerHeight / 2,
        arr[i + 1].xn[j] + window.innerWidth / 2,
        arr[i + 1].yn[j] + window.innerHeight / 2
      );
    }
  }
}

function update() {
  for (i = 0; i < arr.length; i++) {
    arr[i].update();
  }
}
