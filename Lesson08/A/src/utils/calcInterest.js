export default (principal, yearlyRate, years) => {
    const P = principal
    const r = yearlyRate
    const t = years

    return P * Math.pow((1 + r), t)
}