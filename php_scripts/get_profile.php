<?php

require_once('./dbc.php');
require_once('./send_res.php');

$user_id = mysqli_real_escape_string($dbc, trim($_GET['id']));

$query = "SELECT profile.name,profile.image,age.type AS age,gender.type AS gender,
category.type AS category, summary.info 
FROM profile JOIN age ON profile.age_id = age.id
JOIN gender ON profile.gender_id = gender.id
JOIN summary ON summary.profile_id = profile.id
JOIN category ON summary.category_id = category.id
WHERE profile.id = $user_id";

$result = mysqli_query($dbc,$query) or die(mysqli_error());
$data = get_profile($result);

print send_res($data);

function get_profile($result) {
    $data = [];
    while ($row = mysqli_fetch_array($result)) {
        $data[] = array(
            'name' => $row['name'],
            'image' => $row['image'],
            'age' => $row['age'],
            'gender' => $row['gender'],
            'category' => $row['category'],
            'info' => $row['info']
        );
    }
    return $data;
}

mysqli_close($dbc);