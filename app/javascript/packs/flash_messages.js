document.addEventListener("turbo:load", function() {
    const colors = {
        notice: "#5477f5",
        alert: "#f44336",
        error: "#f44336"
    }

    const times = {
        notice: 2500,
        alert: 4000,
        error: 5000
    }

    JSON.parse(document.body.dataset.flashMessages).forEach((flash) => {
        const [type, messages] = flash

        if (Array.isArray(messages)) {
            messages.reverse().forEach((sms) => {
                toastify(sms);
            })
        } else {
            toastify(messages);
        }

        function toastify(sms){
            Toastify({
                text: sms,
                duration: times[type],
                close: true,
                backgroundColor: colors[type],
                stopOnFocus: true,
                position: "center",
                gravity: "top"
            }).showToast()
        }

    } )
})
