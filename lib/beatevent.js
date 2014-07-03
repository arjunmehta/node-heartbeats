
function BeatEvent(heart, interval, fn){
  this.heart = heart;
  this.count = 0;
  this.interval = interval;
  this.fn = fn;
}

BeatEvent.prototype.execute = function(){

  this.count++;

  if(this.count === this.interval){
    this.fn(this.heart.present);
    this.count = 0;
  }
};

exports = module.exports = BeatEvent;