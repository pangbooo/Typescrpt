//Animal.d.ts
let cat = new Animal('Tom');

//Directions.d.ts
let direction =  [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

//jQuery.d.ts
jQuery('#foo');
let settings: jQuery.AjaxSettings = {
    method: 'GET',
    data: 'foo'
}
jQuery.ajax('/api',settings);
