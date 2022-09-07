const deleteBtn = document.querySelectorAll('.deleteRecipe') // Updated this one
const searchRecipe = document.querySelectorAll('.')

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener('click', deleteRecipe)
})

async function deleteRecipe() {
  const recipeId = this.parentNode.dataset.id //Will be the same
  try {
    const response = await fetch('recipe/deleteRecipe', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'recipeIdFromJSFile': recipeId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}