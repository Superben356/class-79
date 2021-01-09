nosa=[];
function submit(){
    var name_1=document.getElementById("nos_1").value; 
    var name_2=document.getElementById("nos_2").value;
    var name_3=document.getElementById("nos_3").value;
    var name_4=document.getElementById("nos_4").value;
    nosa.push(name_1);
    nosa.push(name_2);
    nosa.push(name_3);
    nosa.push(name_4);
    console.log(nosa);
    document.getElementById("display_name").innerHTML=nosa;

    document.getElementById("submit_button").style.display = "none";
     document.getElementById("sort_button").style.display = "inline-block";
     }
      function sorting() 
      { name_of_the_student_array.sort();
         console.log(nosa);

         document.getElementById("display_name").innerHTML =nosa; }