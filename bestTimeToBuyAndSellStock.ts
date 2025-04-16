function maxProfit(prices: number[]): number {
    let buy = 0
    let sell = 1
    let max = 0

    while (sell < prices.length) {
        if (prices[buy] < prices[sell]) {
            const profit = prices[sell] - prices[buy]
            if (profit > max) {
                max = profit
            }
        } else {
            buy = sell
        }
        sell++
    }

    return max
}

console.log(maxProfit([7,1,5,3,6,4]))
