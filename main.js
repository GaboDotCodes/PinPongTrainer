const number = document.getElementById("mainNumber");
const periodeNumber = document.getElementById("periodeNumber");
const periode = document.getElementById("periode");
const substracTime = document.getElementById("substracTime");
const addTime = document.getElementById("addTime");
periodeNumber.innerHTML = periode.value;
let interval = parseInt(periodeNumber.innerHTML);

periode.addEventListener("input", () => {
  periodeNumber.innerHTML = periode.value;
  interval = parseInt(periode.value);
  timerInterval.set_interval(interval);
});

addTime.addEventListener("click", (e) => {
  e.preventDefault();
  periode.value = parseInt(periode.value) + 100;
  periodeNumber.innerHTML = periode.value;
  interval = parseInt(periode.value);
  timerInterval.set_interval(interval);
});

substracTime.addEventListener("click", (e) => {
  e.preventDefault();
  periode.value = parseInt(periode.value) - 100;
  periodeNumber.innerHTML = periode.value;
  interval = parseInt(periode.value);
  timerInterval.set_interval(interval);
});

function timer() {
  var timer = {
    running: false,
    iv: 5000,
    timeout: false,
    cb: function () {},
    start: function (cb, iv, sd) {
      var elm = this;
      clearInterval(this.timeout);
      this.running = true;
      if (cb) this.cb = cb;
      if (iv) this.iv = iv;
      if (sd) elm.execute(elm);
      this.timeout = setTimeout(function () {
        elm.execute(elm);
      }, this.iv);
    },
    execute: function (e) {
      if (!e.running) return false;
      e.cb();
      e.start();
    },
    stop: function () {
      this.running = false;
    },
    set_interval: function (iv) {
      clearInterval(this.timeout);
      this.start(false, iv);
    },
  };
  return timer;
}

var timerInterval = new timer();
timerInterval.start(
  () => {
    const randomNumber = Math.ceil(Math.random() * 6);
    number.innerHTML = randomNumber;
  },
  interval,
  false
);
