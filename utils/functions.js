//Loop through all bills and return a float
function calculateUnpaid() {
    let total = 0
    data.bills.map((item) => {
        total += item.howMuch
    })
    return parseFloat(total).toFixed(3)
}

export { calculateUnpaid }