function findTerms()
        {   
             event.preventDefault();
             
             var aEnd ="2023-02-05";
             var gEnd ="2022-12-25";
             var eEnd ="2023-01-04";

             var date = document.getElementById("inputD").value;
             var terms = document.getElementById("inputT").value;
             var memb = document.getElementById("inputM").value;

             var st1=document.getElementById("step1");
             var st2=document.getElementById("step2");
             var st3=document.getElementById("step3");
             var st4=document.getElementById("step4");
             var st5=document.getElementById("step5");
             var st6=document.getElementById("step6");
             var st7=document.getElementById("step7");
             var st8=document.getElementById("step8");
             var st9=document.getElementById("step9");
             var st10=document.getElementById("step10");
             var stheader = st1.parentElement;

            if(t=="g")
            {
                if(date>gerEnd)
                {              
                    stheader.style.backgroundColor="Green";
                    st1.style.color="White";
                    st1.innerHTML="New";
                    st2.innerHTML="QT ";
                    st3.innerHTML="bo";
                    if(memb=="m" || memb=="y")
                    {
                        st4.innerHTML=""
                        st5.innerHTML="6805 in "
                        st6.innerHTML="E"
                    }
                    else
                    {
                         st4.innerHTML=" 6805";
                         st5.innerHTML="E";
                         st6.innerHTML="";
                    }
                }
            }
                                      
        }
    function copyThisText(x)
    {
        
        var text = x.innerHTML;
         navigator.clipboard.writeText(text);
        
    }