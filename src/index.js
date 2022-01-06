module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let res = '';
    let str = String(number);

    if (str.length == 3) {
        res += numbers[str[0]] + ' hundred';
        if (str[1] == 1) {
            res += ' ' + numbers[str[1]+str[2]]
        } else if(str[1] == 0){
            if (str[2] == 0){
                res += ''
            } else {
                res += ' ' + numbers[str[2]];
            }
        } else if ((str[1] + str[2]) % 10 == 0){
            res += ' ' + dozens[str[1]-2]
        } else if ((str[1] + str[2]) % 10 != 0) {
            res += ' ' + dozens[str[1]-2] + ' ' + numbers[str[2]]
        }
    } else if (str.length == 2){
        if (str[0] == 1) {
            res += numbers[str[0]+str[1]]
        } else if ((str[0] + str[1]) % 10 == 0){
            res += dozens[str[0]-2]
        } else if ((str[0] + str[1]) % 10 != 0) {
            res += dozens[str[0]-2] + ' ' + numbers[str[1]]
        }
    } else if (str.length == 1) {
        res += numbers[str[0]]
    } else {
        console.log(0);
    }

    return res;
}
