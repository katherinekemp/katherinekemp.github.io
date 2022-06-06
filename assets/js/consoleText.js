// function([string1, string2],target id,[color1,color2])   
consoleText(['Hey, I\'m Katie.', 'Welcome to my website!'], 'text',);

function consoleText(words, id) {
  var prev = '';
  colors = ['#16161a'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0] + '; font-family: Arial, Helvetica, sans-serif')
  window.setInterval(function () {

    if (letterCount === 0 && waiting === false) {

      waiting = true;
      target.innerHTML = prev + words[0].substring(0, letterCount)
      window.setTimeout(function () {
        // var usedColor = colors.shift();
        // colors.push(usedColor);
        // var usedWord = 
        words.shift();
        // words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0] + '; font-family: Arial, Helvetica, sans-serif')
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      if (words.length > 1) {
        prev = prev + words[0] + '<br>';
      } else {
        prev = prev + words[0];
      }
      window.setTimeout(function () {
        letterCount = 0;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = prev + words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)

  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}