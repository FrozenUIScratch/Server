function getcmd(cmd){
  var cmds = {};
  cmds.returnobj = function(){
    var compile = {};
    compile.cmd = cmd;
  }
  
  return cmds;
}

function CommandInterface(object){
  this.cmdline = object;
}

function Failload(func, type, text, show){
  chrome[type] = function(){
    if(show){
      console.log(text+" "+chrome.runtime.lastError);
    } else {
      console.log(text);
    }
  }
}

function APIFunctionKeyString(cmd, array, callback){
  callback(array);
  this.cmd = new CommandInterface({});
  this.func = callback;
  this.failload = new Failload("onerror", "There Seems to be an error:", true);
}

var apistring1 = new APIFunctionKeyString("GET",
  {
    "url": "http://flatuicolors.com"
  }
  , function(data){
  var htmlDATA;
  $.get(data.url, function(data){
    htmlDATA = data;
  });
  console.log("HTML recieved:");
  console.log(htmlDATA);
});