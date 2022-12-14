// There are properties
// 1. start()
// 2. stop()
// 3. duration()
// 4. reset()

// function sw() {
//   let startTime,
//     endTime,
//     duration = 0,
//     running;

//   this.start = function () {
//     if (running) console.log("Alerady started");

//     running = true;
//     startTime = new Date();
//   };
//   this.stop = function () {
//     if (!running) console.log("Alerady started");

//     running = false;
//     endTime = new Date();

//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   };
//   this.reset = function () {
//     (startTime = null), (endTime = null), (duration = 0), (running = false);
//     };
    
//     Object.defineProperty(this, 'duration',{
//         get: function() {return duration}
//     });
// }



function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

