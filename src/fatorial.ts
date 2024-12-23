function fatorial(n: number): number{
    if (n < 0) {
        return 0;
    }

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

export default fatorial;
