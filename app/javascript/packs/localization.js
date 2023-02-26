navigator.permissions.query({name:'geolocation'}).then(function(result) {
    if (result.state === 'granted') {
        getLocation(); // chama a função para obter a localização
    } else if (result.state === 'prompt') {
        // pede permissão para acessar a localização do usuário
        // navigator.geolocation.getCurrentPosition();
    } else if (result.state === 'denied') {
        console.log('Permissão para acessar a localização negada');
    }
});