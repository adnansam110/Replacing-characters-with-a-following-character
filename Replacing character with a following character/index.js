var str = prompt("Enter a string");
var arr = str.split("");
arr.forEach(element => {
        switch(element)
        {
            case 'z':
                element = 'a';
                break;

            case 'Z':
                element = 'A';
                break;
            default:     
                element=String.fromCharCode(1 + element.charCodeAt(0));
                //document.write(element);
               
        }
            console.log(element);
    });