function LoginValidation(values) {
    let error = {}; // Initialise un objet vide pour stocker les erreurs

    // Utilisation d'une expression régulière pour vérifier le format de l'e-mail
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Vérification du champ 'email'
    if (values.email === "") {
        error.email = "Should not be empty"; // Si l'e-mail est vide, définissez un message d'erreur
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is incorrect"; // Si le format de l'e-mail est incorrect, définissez un message d'erreur
    } else {
        error.email = ""; // Sinon, l'e-mail est valide, pas d'erreur
    }

    // Vérification du champ 'password'
    if (values.password === "") {
        error.password = "Should not be empty"; // Si le mot de passe est vide, définissez un message d'erreur
    } else {
        error.password = ""; // Sinon, le mot de passe est valide, pas d'erreur
    }

    return error; // Retourne l'objet 'error' qui contient les erreurs (vide si tout est valide)
}

export default LoginValidation; // Exporte la fonction pour une utilisation dans d'autres parties du code
