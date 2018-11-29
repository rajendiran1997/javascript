var a = (number) => {
    if(number > 0 && number < 1000000){
    var ones = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
    var toes = ['dummy','Eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
    var twos = ['dummy','dummy','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninty'];
    var tensquare = 'hundred';
    var tencube = 'thousand';
    if(number > 0 && number < 11)
        return ones[number];
    else if(number > 10 && number < 21)
        if(number == 20) return toes[10];
        else return toes[number%10];
    else if(number >20 && number < 100)
        return twos[Math.floor(number/10)]+ ' ' + ((number%10 == 0) ? '' :ones[number%10]);
    else if(number > 99 && number < 1000)
        return (number%100==0) ? ones[number/100] + ' ' + tensquare : ones[Math.floor(number/100)]+ ' ' + tensquare + ' and ' + twos[Math.floor((number%100)/10)] +' '+ ((Math.floor((number%100)%10) == 0 ) ? '' : ones[Math.floor((number%100)%10)]);
    }
    else return;
}

print(a(157));