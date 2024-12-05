function toggleSidebar() {
	var sidebar = document.getElementById('sidebar');
	sidebar.classList.toggle('show-sidebar');
}

function handleOption1(checkbox) {
    if (checkbox.checked) {
        console.log("Opción 1 seleccionada");
        display_communes();
    } 
	else 
	{
        console.log("Opción 1 deseleccionada");
		removeAllPolygons();
    }
}

function handleOption2(checkbox) {
    var floatingDiv = document.getElementById('floatingDiv');
    if (checkbox.checked) {
        floatingDiv.style.display = 'block'; // Muestra el div
    } else {
        floatingDiv.style.display = 'none'; // Oculta el div
    }
}

function handleOption3(checkbox) {
    if (checkbox.checked) {
        console.log("Opción 3 seleccionada");
        // Código adicional cuando se selecciona la Opción 3
    } else {
        console.log("Opción 3 deseleccionada");
        // Código adicional cuando se deselecciona la Opción 3
    }
}