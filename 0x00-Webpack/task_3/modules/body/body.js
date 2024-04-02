import './body.css';
import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

$('#start').on('click', _.debounce(updateCounter, 1000));
