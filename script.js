let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.getElementById('main-title').innerHTML = "Welcome to Dom's homepage."

  // Part 2
  document.body.style.backgroundColor = 'thistle'

  // Part 3
  const ul = document.getElementById('favorite-things')
  ul.removeChild(ul.lastElementChild)

  // Part 4
  const div = document.querySelectorAll('.special-title')
  div.forEach(item => {
    item.style.fontSize = '2rem'
  })

  // Part 5
  const list = document.querySelectorAll('#past-races li')
  list.forEach(li => {
    if (li.textContent === 'Chicago') {
      li.remove()
    }
  })

  // Part 6
  const ulPastRaces = document.getElementById('past-races')
  const li = document.createElement('li')
  li.textContent = 'Vancouver'
  ulPastRaces.appendChild(li)

  // Part 7
  const newDiv = document.createElement('div')
  newDiv.classList.add('blog-post', 'purple')
  const h1 = document.createElement('h1')
  h1.textContent = li.textContent
  const p = document.createElement('p')
  p.textContent = 'I DROVE MY CAR ON TWO WHEELS THRU A SHOP'
  newDiv.appendChild(h1)
  newDiv.appendChild(p)
  const mainDiv = document.querySelector('.main')
  mainDiv.appendChild(newDiv)

  // Part 8
  const quoteEl = document.querySelector('#quote-title')
  quoteEl.addEventListener('click', randomQuote)

  // Part 9
  const blogList = document.querySelectorAll('.blog-post')

  blogList.forEach(blog => {
    blog.addEventListener('mouseout', (e) => {
      blog.classList.toggle('purple')
      blog.classList.toggle('red')
    })
    blog.addEventListener('mouseenter', (e) => {
      blog.classList.toggle('red')
      blog.classList.toggle('purple')
    })
  })
})
