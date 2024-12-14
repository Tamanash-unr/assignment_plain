(function () {
    let lastSelected = null

    // Add Event listener for radio
    document.getElementsByName("radioGroup").forEach((elem) => {
        elem.addEventListener('change', (evt) => {
            if (lastSelected !== null && lastSelected !== evt.target.value) {
                //Remove Active Classes on Unselected
                document.getElementById(lastSelected).classList.remove('visible')
                document.getElementById(`${lastSelected}-wrapper`).classList.remove('box-active')

                //Add Inactive Classes on Unselected
                document.getElementById(lastSelected).classList.add('hidden')
                document.getElementById(`${lastSelected}-wrapper`).classList.add('box-default')
            }

            if(evt.target.checked){
                // Update Last Selected
                lastSelected = evt.target.value

                //Remove Inactive Classes on Selected
                document.getElementById(lastSelected).classList.remove('hidden')
                document.getElementById(`${lastSelected}-wrapper`).classList.remove('box-default')

                //Add Active Classes on Selected
                document.getElementById(lastSelected).classList.add('visible')
                document.getElementById(`${lastSelected}-wrapper`).classList.add('box-active')

            }
        })
    })
})()