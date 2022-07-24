document.querySelector(".add-style-card").addEventListener("click", function() {
    document.querySelector(".add-style-card").style.backgroundColor = "#fbf7f1";
    alert("You need to be logged in to add a new style!");
} )

document.querySelector("#editCosting").addEventListener("click", function() {
    alert("You need to be logged in to make changes!");
} )

document.querySelector("#raiseConcernButton").addEventListener("click", function() {
    alert("Your request has been submitted successfully!")
}) 

window.onload = function(){
    for (let index = 0; index < document.getElementsByClassName("style-card").length; index++) {
        if (index==0) {
            document.getElementsByClassName("style-card")[index].style.border = '#d4a37d solid 5px';
        }
        else if (index==1) {
            document.getElementsByClassName("style-card")[index].style.border = '#e8d9cc solid 5px';
        }
        else if (index==2) {
            document.getElementsByClassName("style-card")[index].style.border = '#d4a37d solid 5px';
        }
        else if (index==3) {
            document.getElementsByClassName("style-card")[index].style.border = '#e8d9cc solid 5px';
        }
        else if (index==4) {
            document.getElementsByClassName("style-card")[index].style.border = '#d4a37d solid 5px';
        }
        else if (index==5) {
            document.getElementsByClassName("style-card")[index].style.border = '#e8d9cc solid 5px';
        }
        else if (index==6) {
            document.getElementsByClassName("style-card")[index].style.border = '#d4a37d solid 5px';
        }
    }
}

document.querySelector("#sort-date").addEventListener("click", function(){
    window.location.reload();
})

document.querySelector("#sort-sampling").addEventListener("click", function() {
    for (let index = 0; index < document.getElementsByClassName("style-card").length; index++) {
        if (index<3) {
            document.getElementsByClassName("style-card")[index].style.border = "#e8d9cc solid 5px" ;
        }
        else {
            document.getElementsByClassName("style-card")[index].style.border = "#d4a37d solid 5px" ;
        }
    }
})

document.querySelector("#sort-production").addEventListener("click", function() {
    for (let index = 0; index < document.getElementsByClassName("style-card").length; index++) {
        if (index<3) {
            document.getElementsByClassName("style-card")[index].style.border = "#d4a37d solid 5px" ;
        }
        else {
            document.getElementsByClassName("style-card")[index].style.border = "#e8d9cc solid 5px" ;
        }
    }
})

