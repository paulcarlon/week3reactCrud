// Paul Carlon
// Front-End Web Development Week 1
// Coding Assignment

const itemPrice = 77
const moneyInWalletBefore = 100
let numberOfFriends = 231
let age = 21
const firstName = 'Linus'
const lastName = 'Torvalds'
const middleInitial = 'B'

let moneyInWalletAfter = moneyInWalletBefore - itemPrice
let friendsPerYear = numberOfFriends / age

const fullName = firstName + ' ' + middleInitial + '. ' + lastName

console.log(
  'You will get your first year of hosting for the low, low price of $' +
    itemPrice +
    '.'
)
console.log('Thank you. Here is $' + moneyInWalletBefore + '.')
console.log(
  'I walked away with $' + moneyInWalletAfter + ' and a killer deal on hosting!'
)
console.log('According to my MySpace I have ' + numberOfFriends + ' friends.')
console.log("I know it's hard to believe, but I'm " + age + ' years old.')
console.log("I've made " + friendsPerYear + ' friends per year!')
console.log('Let us all thank the great:')
console.log(firstName)
console.log(middleInitial)
console.log(lastName)
console.log(fullName)
console.log('Who created Linux in 1991 as well as Github in 2005')
