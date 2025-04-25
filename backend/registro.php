<?php
// backend/registro.php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    // Validación básica
    if (empty($username) || empty($password)) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Faltan datos requeridos.'
        ]);
        exit;
    }

    // Validación de formato (ejemplo)
    if (!pregmatch('/^[a-zA-Z0-9]{4,20}$/', $username)) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Nombre de usuario inválido.'
        ]);
        exit;
    }

    // Aquí podrías agregar lógica para guardar en base de datos, etc.

    echo json_encode([
        'status' => 'ok',
        'message' => 'Usuario registrado correctamente.'
    ]);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Método no permitido.'
    ]);
}