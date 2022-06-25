var navibar = document.getElementsByTagName("img")[0];

var flag = 0;

navibar.addEventListener("click", () => {
    var navigation = document.getElementById("div");
    if(flag == 0){
        flag = 1;
        navigation.classList.remove("hidden");
    }else{
        navigation.classList.add("hidden");
        flag = 0;
    }
})
