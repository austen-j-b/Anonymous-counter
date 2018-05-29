var startedCounting = false;
var MAX;
var currentTotal = 0;
var startTime;
var finishTime

function count(){
  if(!startedCounting){
    startedCounting = true;
    startTime = new Date();
    MAX = document.getElementById('in-max').value;
    console.log(MAX);

    //dont allow user to edit their input max
    document.getElementById('in-max').disabled = true;
    //change button so that it now adds 1 to counter
    document.getElementById('btn-count').innerHTML = '+1';

    //Add stop button
    var stopButton = document.createElement('button');
    stopButton.id = 'btn-stop';
    stopButton.addEventListener('click', forceStop);
    stopButton.appendChild(document.createTextNode('STOP'));
    document.getElementById('content').appendChild(stopButton);
  }
  else{
    if(currentTotal+1 == MAX){
      document.getElementById('btn-count').remove();
      document.getElementById('btn-stop').remove();
      var finishText = document.createTextNode('MAX AMOUNT REACHED');
      document.getElementById('content').appendChild(finishText);
      finishTime = new Date();
      var totalTime = getTimeDiff();
      var displayTime = document.createTextNode(totalTime);
      document.getElementById('content').appendChild(document.createElement('br'));
      document.getElementById('content').appendChild(displayTime);
    }
    else{
      currentTotal++;
    }
  }
}

function getTimeDiff(){
  var seconds = Math.floor((finishTime - (startTime))/1000);
  var minutes = Math.floor(seconds/60);
  var hours = Math.floor(minutes/60);
  var days = Math.floor(hours/24);

  hours = hours-(days*24);
  minutes = minutes-(days*24*60)-(hours*60);
  seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

  return ('Time elapsed: ' + hours + '-' + minutes + '-' + seconds);
}

function forceStop(){
  document.getElementById('btn-count').remove();
  document.getElementById('btn-stop').remove();
  finishTime = new Date();
  var totalTime = getTimeDiff();
  var displayTime = document.createTextNode(totalTime);
  var num = document.createTextNode('Total: ' + currentTotal);
  document.getElementById('content').appendChild(num);
  document.getElementById('content').appendChild(document.createElement('br'));
  document.getElementById('content').appendChild(displayTime);

}
