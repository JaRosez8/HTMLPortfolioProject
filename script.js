var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
         function opentab(tabname){
            for(let tablink of tablinks ){
                tablink.classList.remove("active-link");
            }
            for(let tabcontent of tabcontents ){
                tabcontent.classList.remove("active-tab");
            }
            //add "active-link to the clicked tab"
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");

        }