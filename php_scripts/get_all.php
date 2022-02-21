<?php

require_once('./dbc.php');
require_once('./send_res.php');

$search = mysqli_real_escape_string($dbc, trim($_GET['search']));
$filter_age = mysqli_real_escape_string($dbc, trim($_GET['age']));
$filter_gender = mysqli_real_escape_string($dbc, trim($_GET['gender']));
$sort = mysqli_real_escape_string($dbc, trim($_GET['sort']));
$page = mysqli_real_escape_string($dbc, trim($_GET['page'] - 1));
$page_size = mysqli_real_escape_string($dbc, trim($_GET['page_size']));

if ($page != 0) $page = $page + 9;

if ($filter_age === 'all') $filter_age = ''; 
if ($filter_gender === 'all') $filter_gender = '';

if ($sort === 'name') $sort = 'name ASC';
elseif ($sort === '-name') $sort = 'name DESC';
else $sort = 'id ASC';

$query = 
"SELECT profile.id,profile.name,profile.image,age.type AS age,gender.type AS gender 
FROM profile 
JOIN age ON profile.age_id = age.id
JOIN gender ON profile.gender_id = gender.id
WHERE profile.name LIKE '%$search%'
AND age.type LIKE '$filter_age%'
AND gender.type LIKE '$filter_gender%'
ORDER BY $sort
LIMIT $page, $page_size";

$result = mysqli_query($dbc,$query) or die(mysqli_error());

$query_count = "SELECT COUNT(*) AS count FROM profile 
JOIN age ON profile.age_id = age.id
JOIN gender ON profile.gender_id = gender.id
WHERE profile.name LIKE '%$search%'
AND age.type LIKE '$filter_age%'
AND gender.type LIKE '$filter_gender%'";

$result_count = mysqli_query($dbc,$query_count) or die(mysqli_error());
$count = mysqli_fetch_array($result_count);

$data = get_all_data($result, $count['count']);

print send_res($data);

function get_all_data($result, $count) {
    $meta = array('total' => $count);
    $characters = [];

    while ($row = mysqli_fetch_array($result)) {
        $characters[] = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'image' => $row['image'],
            'age' => $row['age'],
            'gender' => $row['gender']
        );
    }

    $data = array(
        'characters' => $characters,
        'meta' => $meta
    );
    return $data;
}

mysqli_close($dbc);