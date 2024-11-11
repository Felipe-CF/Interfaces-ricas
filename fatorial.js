function fatorial(n){

    if (n < 0)
        return "nao fatorial"

    if(n == 0)
        return 0

    if (n == 1)
        return 1
    else 
        return n * fatorial(n-1)
}

module.exports = fatorial;