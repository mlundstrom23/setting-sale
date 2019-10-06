function selectSaleItems(items) {
  return items.filter((item) => {
    return item.discount > 0 && item.discount != undefined
  })
  
}

module.exports = selectSaleItems
