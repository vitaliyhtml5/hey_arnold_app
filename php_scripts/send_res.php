<?php

function send_res($data) {
    header('Content-type: application/json');

    if (isset($data['meta']['total']) && $data['meta']['total'] == 0) {
        print json_encode(array('message' => 'no results found'));
    } else {
        print json_encode($data);
    }
}