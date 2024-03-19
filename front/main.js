const btntoto = document.getElementById("btntoto");
btntoto.addEventListener('click', () => {
    let loginValue = "";
    let passValue = "";
    const login = document.getElementById("email");
    if (login != undefined) {
        loginValue = login.value;
    }
    const pass = document.getElementById("password");
    if (pass != undefined) {
        passValue = pass.value;
    }

    //appel de l'API
    // Données JSON à envoyer
    const dataToSend = {
        email: loginValue,
        password: passValue
    };

    // URL de l'API à laquelle envoyer la requête POST
    const apiUrl = 'http://192.168.64.250:4000/login';

    // Options de la requête
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    };

    // Envoi de la requête
    fetch(apiUrl, requestOptions)
        .then(response => {
            // Vérification de la réponse
            if (!response.ok) {
                throw new Error('Erreur lors de la requête');
            }
            // Conversion de la réponse en JSON
            return response.json();
        })
        .then(data => {
            // Traitement de la réponse
            console.log('Réponse de l\'API :', data);
        })
        .catch(error => {
            // Gestion des erreurs
            console.error('Erreur :', error);
        });

});