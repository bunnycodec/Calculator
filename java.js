  var screen = document.getElementById('screen');
  var recap = [];
  function pushBtn(data){
    var pushed = data.innerHTML;
    recap.push(pushed);
    if(pushed === '='){
      screen.innerHTML = eval(screen.innerHTML);
      recap = [];
      recap.push(screen.innerHTML);
    }
    else if(pushed === 'AC'){
      recap = [];
      screen.innerHTML = '0';
    }
    else if(pushed === 'CE'){
      recap.pop();
      recap.pop();
      if(recap.length === 0)
        screen.innerHTML = '0';
      else
        screen.innerHTML = recap.join('');
    }
    else{
      if(screen.innerHTML === '0')
        screen.innerHTML = pushed;
      else
          screen.innerHTML += pushed;
    }
  }
