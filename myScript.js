function myFunction() {
    var str = document.getElementById("in").value;
    var res = str.split(" ");
    var text = "<table><tr>";
      for (let index = 0; index < res.length; index++) {
        text += "<th>"+ res[index]+"</th>";
      }
    text += "</tr></table>";
    
    document.getElementById("test").innerHTML = text;
    }