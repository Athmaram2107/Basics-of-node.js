const figlet=require("figlet");

figlet("Athma Ram",function(err,data){
    if(err){
        console.log("something went wrong!..")

    }
    console.log(data);
});