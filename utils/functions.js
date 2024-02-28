//Loop through all bills, add together any that are marked as paid - false and return a float
export function calculateUnpaid(data) {
    let total = req.body.howMuch
    data.bills.map((item) => {
        if (!item.paid) {
            total += item.howMuch
        }

    })
    return parseFloat(total).toFixed(3)
}

