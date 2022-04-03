;(function () {
  var updateButton = document.getElementById('updateDetails')
  var cancelButton = document.getElementById('cancel')
  var favDialog = document.getElementById('favDialog')

  // O botão Update abre uma Dialog
  updateButton.addEventListener('click', function () {
    favDialog.showModal()
  })

  // O botão cancelButtom fecha uma Dialog
  cancelButton.addEventListener('click', function () {
    favDialog.close()
  })
})()
