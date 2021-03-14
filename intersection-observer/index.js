const fetchMoreTrigger = document.querySelector('#fetchMore')

const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
  // do something
  if (isIntersecting) {
    fetchMore()
  }
})

fetchMoreObserver.observe(fetchMoreTrigger)
