document.querySelectorAll('.filter-container select').forEach(select => {
    select.addEventListener('change', () => {
        console.log(Filter geändert: ${select.id} = ${select.value});
        // Hier kannst du deine Logik für das Filtern der Filme einfügen
    });
});