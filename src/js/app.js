document.addEventListener('DOMContentLoaded', () => {
    console.log('documento listo');

    const data = [
        { title: "Work", timeframes: { daily: { current: 5, previous: 7 }, weekly: { current: 32, previous: 36 }, monthly: { current: 103, previous: 128 } } },
        { title: "Play", timeframes: { daily: { current: 1, previous: 2 }, weekly: { current: 10, previous: 8 }, monthly: { current: 23, previous: 29 } } },
        { title: "Study", timeframes: { daily: { current: 0, previous: 1 }, weekly: { current: 4, previous: 7 }, monthly: { current: 13, previous: 19 } } },
        { title: "Exercise", timeframes: { daily: { current: 1, previous: 1 }, weekly: { current: 4, previous: 5 }, monthly: { current: 11, previous: 18 } } },
        { title: "Social", timeframes: { daily: { current: 1, previous: 3 }, weekly: { current: 5, previous: 10 }, monthly: { current: 21, previous: 23 } } },
        { title: "Self Care", timeframes: { daily: { current: 0, previous: 1 }, weekly: { current: 2, previous: 2 }, monthly: { current: 7, previous: 11 } } }
    ];

    const opciones = document.querySelectorAll('.opcion')
    const tarjetas = document.querySelectorAll('.tarjeta')

    function actualizarDatos(periodo) {
        tarjetas.forEach(tarjeta => {
            const titulo = tarjeta.querySelector('.titulo').textContent
            const actividad = data.find(item => item.title === titulo)

            if(actividad) {
                const horasActuales = actividad.timeframes[periodo].current
                const horasPrevias = actividad.timeframes[periodo].previous

                let periodoTexto = ''
                if(periodo === "daily") periodoTexto = 'Day'
                else if(periodo === "weekly") periodoTexto = 'Week'
                else if(periodo === "monthly") periodoTexto = 'Month'

                tarjeta.querySelector('.hrasActuales').textContent = `${horasActuales}hrs`
                tarjeta.querySelector('.hrasPrevias').textContent = `Last ${periodoTexto} - ${horasPrevias}hrs`
            }
        })
    }

    opciones.forEach(opcion => {
        opcion.addEventListener('click', () => {
            opciones.forEach( op => op.classList.remove('active') )
            opcion.classList.add('active')

            const periodo = opcion.textContent.toLowerCase()
            actualizarDatos(periodo)
        })
    })
})