var names= new Array()
names[0]="jou";
names[1]="me";
names[2]="Jour";
names[3]="our";
names[4]="Jooo";
names[5]="joour";

for (var i=0; i<names.length; i++){
    if(names[i].charAt(0)=='j'|| names[i].charAt(0)=='J' ){
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }

}
    