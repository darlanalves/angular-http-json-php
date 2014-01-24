<?php

/**
 * Request data sent as "application/x-www-form-urlencoded" can be accessed via $_POST
 */
// var_dump($_POST);

/**
 * To use JSON data format on POST/PUT, change the "Content-Type" header to "application/json"
 * before send the JSON data and use the following lines:
 */

$requestBody = file_get_contents('php://input');
echo print_r(json_decode($requestBody, /* associative array */true));
