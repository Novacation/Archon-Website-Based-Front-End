$("#closeBtn").on('click', () => {
    $("#verticalMenu").removeClass("open-nav")
    $("body").removeClass("stop-scrolling")
})


$("#openBtn").on('click', () => {
    $("#verticalMenu").addClass("open-nav")
    $("body").addClass("stop-scrolling")
})
